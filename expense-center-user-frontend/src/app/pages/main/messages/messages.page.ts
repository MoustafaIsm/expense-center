import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ChatItem } from 'src/app/interfaces/ChatItem';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  chats: ChatItem[] = [];
  userId: number = parseInt(localStorage.getItem('id'), 10);

  constructor(private chatService: ChatService, private toastController: ToastController) { }

  ngOnInit(): void {
    this.chatService.getChatItems(this.userId).subscribe(
      (chats) => this.chats = chats,
      (error) => this.presentToast('Something went wrong'));
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
    });

    await toast.present();
  }

}
