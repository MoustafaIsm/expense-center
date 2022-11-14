import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { database } from 'src/app/services/firebase';
import { ref, onValue, set, get, child, connectDatabaseEmulator } from 'firebase/database';
import { ChatItem } from 'src/app/interfaces/ChatItem';
import { Message } from 'src/app/interfaces/Message';
import { getCurrentDateTime, convertToChatItem, convertToMessage } from 'src/utilities/functions';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getChatItems(id: number): Observable<ChatItem[]> {
    const userChat = [];
    const chatRef = ref(database, 'chats');
    // Get database data
    onValue(chatRef, (snapshot) => {
      // reset the userChat array
      userChat.length = 0;
      const data = snapshot.val();
      // Loop through the data
      for (const key in data) {
        // Check if the data is not null
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          // Check if the chat is for the user
          if (element.firstUserId === id || element.secondUserId === id) {
            // Convert the data to a ChatItem
            const chat = convertToChatItem(element, key);
            userChat.push(chat);
          }
        }
      }
    });
    const chats = of(userChat);
    return chats;
  }

  getChatMessages(chatId: number): Observable<Message[]> {
    const messages = [];
    const chatRef = ref(database, 'chats/' + chatId + '/messages');
    // Get database data
    onValue(chatRef, (snapshot) => {
      // reset the messages array
      messages.length = 0;
      const data = snapshot.val();
      // Loop through the data
      for (const key in data) {
        // Check if the data is not null
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          // Convert the data to a Message
          const message = convertToMessage(element, key);
          messages.push(message);
        }
      }
    });
    const chatMessages = of(messages);
    return chatMessages;
  }

  sendMessage(chatId: number, userId: number, sentTo: number, message: string, messageId: string) {
    // Add message to the database
    set(ref(database, 'chats/' + chatId + '/messages/' + messageId), {
      sentBy: userId,
      sentTo,
      message,
      timeStamp: getCurrentDateTime()
    });
    // Update the latest message
    set(ref(database, 'chats/' + chatId + '/latestMessage'), {
      sentBy: userId,
      sentTo,
      message,
      timeStamp: getCurrentDateTime()
    });
  }

  async getSnapshots() {
    const dbRef = ref(database);
    return await get(child(dbRef, 'chats'));
  }

  async createChat(firstUserId: number, secondUserId: number) {
    // Get snapshots
    const snapshots = await this.getSnapshots();
    const data = snapshots.val();
    let highestId = 0;
    let chatExists = false;
    // Loop over the snapshots
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        // Get the highest id
        if (parseInt(key, 10) > highestId) {
          highestId = parseInt(key, 10);
        }
        // Check if chat between these two people already exits
        if (data[key].firstUserId === firstUserId && data[key].secondUserId === secondUserId ||
          data[key].firstUserId === secondUserId && data[key].secondUserId === firstUserId) {
          chatExists = true;
          highestId = parseInt(key, 10);
          break;
        }
      }
    }
    // If chat doesnt exist betwen the two users create one
    if (!chatExists) {
      set(ref(database, 'chats/' + (highestId + 1)), {
        firstUserId,
        secondUserId,
        latestMessage: {
          sentBy: 0,
          message: '',
          timeStamp: getCurrentDateTime()
        }
      });
    }
    return chatExists ? highestId : highestId + 1;
  }

}
