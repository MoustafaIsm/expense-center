import { NavController } from '@ionic/angular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { LocationService } from 'src/app/services/location/location.service';
import { ChatService } from 'src/app/services/chat/chat.service';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent implements OnInit {
  @Input() user: User;
  @Output() usernameClick = new EventEmitter<number>();
  @Output() handleFavoriting = new EventEmitter<number>();
  location: string;

  constructor(
    private navController: NavController,
    private locationService: LocationService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.getUserAddress();
  }

  onUsernameClick() {
    this.usernameClick.emit(this.user.id);
  }

  getUserAddress() {
    if (this.user.location == null) {
      this.location = 'Location unknown';
    } else {
      this.locationService.getAddress(this.user.location.latitude, this.user.location.longitude).subscribe(
        (response: any) => {
          this.location = response.features[0].properties.formatted;
        },
        (error: any) => console.log(error)
      );
    }
  }

  onFavoriting() {
    this.handleFavoriting.emit(this.user.id);
  }

  async addChat() {
    const isChatEnabled = this.user.chat_enabled;
    if (isChatEnabled) {
      const id = await this.chatService.createChat(parseInt(localStorage.getItem('id'), 10), this.user.id);
      this.navController.navigateForward(`/main/messages/chat/${id}`, { state: { user: this.user } });
    } else {
      presentToast('This user has disabled chat');
    }
  }

}
