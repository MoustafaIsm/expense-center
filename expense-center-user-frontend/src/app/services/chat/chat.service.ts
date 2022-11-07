import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { firebaseApp } from 'src/app/services/firebase';
import { getDatabase } from 'firebase/database';
import { ChatItem } from 'src/app/interfaces/ChatItem';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Initialize Realtime Database and get a reference to the service
  database = getDatabase(firebaseApp);

  constructor() { }

  getChatItems(): Observable<ChatItem[]> {
    const chats = of([]);
    return chats;
  }
}
