import { Injectable } from '@angular/core';
import { firebaseApp } from 'src/app/services/firebase';
import { getDatabase } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  // Initialize Realtime Database and get a reference to the service
  database = getDatabase(firebaseApp);

  constructor() { }
}
