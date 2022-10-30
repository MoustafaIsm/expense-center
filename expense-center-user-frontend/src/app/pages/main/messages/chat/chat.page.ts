import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  message1 = {
    id: 1,
    date: '2:30 PM',
  };
  message2 = {
    id: 2,
    date: '2:30 PM',
  };
  id = 1;

  constructor() { }

  ngOnInit() {
  }

}
