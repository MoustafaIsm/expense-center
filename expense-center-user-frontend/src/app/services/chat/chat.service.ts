import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { firebaseApp } from 'src/app/services/firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ChatItem } from 'src/app/interfaces/ChatItem';

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
      const data = snapshot.val();
      // Loop through the data
      for (const key in data) {
        // Check if the data is not null
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          // Check if the chat is for the user
          if (element.first_user_id === id || element.second_user_id === id) {
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
}

const convertToChatItem = (data: any, key: string): ChatItem => {
  const chatItem: ChatItem = {
    id: key,
    firstUserId: data.first_user_id,
    secondUserId: data.second_user_id,
    latestMessage: {
      sentBy: data.latest_message.sent_by,
      message: data.latest_message.message,
      timeStamp: data.latest_message.time_stamp
    },
    messages: []
  };
  return chatItem;
};
