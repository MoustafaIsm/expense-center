import { set, ref } from 'firebase/database';
import { Injectable } from '@angular/core';
import { database } from 'src/app/services/firebase';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  saveTokenInDatabase(token: string, userId: number, username: string): void {
    set(ref(database, `users/${userId}/`), {
      username,
      notificationToken: token
    });
  }
}
