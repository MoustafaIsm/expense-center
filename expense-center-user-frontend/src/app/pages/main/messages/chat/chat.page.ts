import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  message = {
    text: 'hi',
    id: 1,
    date: '2019-01-01',
  };
  id = 1;

  constructor() { }

  ngOnInit() {
  }

}
