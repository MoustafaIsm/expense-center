import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/interfaces/Message';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chatId: number;
  mesaages: Message[] = [];

  message1 = {
    id: 1,
    date: '2:30 PM',
  };
  id = 1;

  constructor(private activaitedRoute: ActivatedRoute, private chatService: ChatService) {
    this.chatId = this.activaitedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.chatService.getChatMessages(this.chatId).subscribe((messages) => this.mesaages = messages);
  }

}
