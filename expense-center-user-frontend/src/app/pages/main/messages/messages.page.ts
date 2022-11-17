import { Component, OnInit } from '@angular/core';
import { ChatItem } from 'src/app/interfaces/ChatItem';
import { ChatService } from '../../../services/chat/chat.service';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  chats: ChatItem[] = [];
  userId: number = parseInt(localStorage.getItem('id'), 10);

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.getChats();
  }

  getChats() {
    this.chatService.getChatItems(this.userId).subscribe(
      (chats) => this.chats = chats,
      (error) => presentToast('Something went wrong'));
  }

  handleRefresh(event) {
    this.getChats();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
