import { Component, OnInit } from '@angular/core';
import { ChatItem } from 'src/app/interfaces/ChatItem';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  chats: ChatItem[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getChatItems().subscribe((chats) => this.chats = chats);
  }

}
