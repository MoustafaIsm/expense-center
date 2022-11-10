import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { firebaseApp } from 'src/app/services/firebase';
import { getDatabase, ref, onValue, set, get, child } from 'firebase/database';
import { ChatItem } from 'src/app/interfaces/ChatItem';
import { Message } from 'src/app/interfaces/Message';
import { getCurrentDateTime, convertToChatItem, convertToMessage } from 'src/utilities/functions';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Initialize Realtime Database and get a reference to the service
  database = getDatabase(firebaseApp);

  constructor() { }

  getChatItems(id: number): Observable<ChatItem[]> {
    const userChat = [];
    const chatRef = ref(this.database, 'chats');
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
    const chatRef = ref(this.database, 'chats/' + chatId + '/messages');
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

  sendMessage(chatId: number, userId: number, message: string, messageId: string) {
    // Add message to the database
    set(ref(this.database, 'chats/' + chatId + '/messages/' + messageId), {
      sentBy: userId,
      message,
      timeStamp: getCurrentDateTime()
    });
    // Update the latest message
    set(ref(this.database, 'chats/' + chatId + '/latestMessage'), {
      sentBy: userId,
      message,
      timeStamp: getCurrentDateTime()
    });
  }

  createChat(firstUserId: number, secondUserId: number) {
    const dbRef = ref(this.database);
    get(child(dbRef, 'chats')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let highestId = 0;
        let chatExists = false;
        // Loop through the chats
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            if (parseInt(key, 10) > highestId) {
              highestId = parseInt(key, 10);
            }
            if (data[key].firstUserId === firstUserId && data[key].secondUserId === secondUserId ||
              data[key].firstUserId === secondUserId && data[key].secondUserId === firstUserId) {
              chatExists = true;
            }
          }
        }
        if (!chatExists) {
          // Create a new chat
          set(ref(this.database, 'chats/' + (highestId + 1)), {
            firstUserId,
            secondUserId,
            latestMessage: {
              sentBy: 0,
              message: '',
              timeStamp: getCurrentDateTime()
            }
          });
        }
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });

  }

}
