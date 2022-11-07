import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatItem } from 'src/app/interfaces/ChatItem';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {
  @Input() chatItem: ChatItem;
  userId: number = parseInt(localStorage.getItem('id'), 10);

  constructor(private router: Router) { }

  // TODO: Get user info with an api call
  ngOnInit() { }

  openChat() {
    this.router.navigate(['main/messages/chat', this.chatItem.id]);
  }

}
