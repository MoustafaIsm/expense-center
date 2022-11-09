import { User } from 'src/app/interfaces/User';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-user-profile-info-card',
  templateUrl: './user-profile-info-card.component.html',
  styleUrls: ['./user-profile-info-card.component.scss'],
})
export class UserProfileInfoCardComponent implements OnInit {
  @Input() type: string;
  @Input() user: User;
  @Output() changePageEmmiter = new EventEmitter<string>();
  location: string;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.getUserAddress();
  }

  openPage(page: string) {
    this.changePageEmmiter.emit(page);
  }

  getUserAddress() {
    if (this.user.location === null) {
      this.location = 'Location unknown';
      if (this.type === 'personal') {
        localStorage.setItem('userLocation', this.location);
      }
    } else {
      this.locationService.getAddress(this.user.location.latitude, this.user.location.longitude).subscribe(
        (response: any) => {
          this.location = response.features[0].properties.formatted;
          if (this.type === 'personal') {
            localStorage.setItem('userLocation', this.location);
          }
        },
        (error: any) => console.log(error)
      );
    }
  }
}
