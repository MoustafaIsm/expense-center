import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent implements OnInit {
  @Input() user: User;
  @Output() usernameClick = new EventEmitter<number>();
  location: string;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getUserAddress();
  }

  onUsernameClick() {
    this.usernameClick.emit(this.user.userDetails.id);
  }

  getUserAddress() {
    if (this.user.userDetails.location === null) {
      this.location = 'Location unknown';
    } else {
      this.locationService.getAddress(this.user.userDetails.location.latitude, this.user.userDetails.location.longitude).subscribe(
        (response: any) => {
          this.location = response.features[0].properties.formatted;
        },
        (error: any) => console.log(error)
      );
    }
  }

}
