import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { LocationService } from 'src/app/services/location/location.service';
import { ChatService } from 'src/app/services/chat/chat.service';

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

  addChat() {
    this.chatService.createChat(parseInt(localStorage.getItem('id'), 10), this.user.id);
  }

}
