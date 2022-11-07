import { Component, OnInit } from '@angular/core';
import { firebaseApp } from 'src/app/services/firebase';
import { getDatabase } from 'firebase/database';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  // Initialize Realtime Database and get a reference to the service
  database = getDatabase(firebaseApp);

  constructor() { }

  ngOnInit() {
  }

}
