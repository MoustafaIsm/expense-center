import { Component, Input, OnInit } from '@angular/core';
import { ChatItem } from 'src/app/interfaces/ChatItem';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {
  @Input() chatItem: ChatItem;
  userId: number = parseInt(localStorage.getItem('id'), 10);

  constructor() { }

  // TODO: Get user info with an api call
  ngOnInit() { }

}
