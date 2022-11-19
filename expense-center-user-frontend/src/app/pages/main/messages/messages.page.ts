import { Component, OnInit } from '@angular/core';
import { ChatItem } from 'src/app/interfaces/ChatItem';
import { ChatService } from '../../../services/chat/chat.service';
import { presentToast } from 'src/utilities/functions';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  chats: ChatItem[] = [];
  userId: number = parseInt(localStorage.getItem('id'), 10);
  chatEnabled: boolean = localStorage.getItem('chatEnabled') === '1';

  constructor(private chatService: ChatService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.chatEnabled = localStorage.getItem('chatEnabled') === '1';
        this.getChats();
      }
    });
  }

  ngOnInit(): void {
    this.getChats();
  }

  getChats() {
    if (this.chatEnabled) {
      this.chatService.getChatItems(this.userId).subscribe(
        (chats) => this.chats = chats,
        (error) => presentToast('Something went wrong'));
    }
  }

  handleRefresh(event) {
    this.getChats();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
