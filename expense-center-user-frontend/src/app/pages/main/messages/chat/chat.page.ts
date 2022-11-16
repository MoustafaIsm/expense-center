import { User } from 'src/app/interfaces/User';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/interfaces/Message';
import { ChatService } from 'src/app/services/chat/chat.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  newMessage: string;
  chatId: number;
  messages: Message[] = [];
  userId: number = parseInt(localStorage.getItem('id'), 10);
  user: User;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    private toastController: ToastController,
  ) {
    this.chatId = this.activatedRoute.snapshot.params.id;
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation.extras.state.user;
  }

  ngOnInit() {
    this.chatService.getChatMessages(this.chatId).subscribe(
      (messages) => this.messages = messages,
      (error) => this.presentToast('Something went wrong'));
  }

  sendMessage() {
    this.chatService.sendMessage(this.chatId, this.userId, this.user.id, this.newMessage, (this.messages.length + 1).toString());
    this.newMessage = '';
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
    });

    await toast.present();
  }

}
