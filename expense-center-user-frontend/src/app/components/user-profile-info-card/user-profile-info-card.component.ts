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

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() { }

  openPage(page: string) {
    this.changePageEmmiter.emit(page);
  }

}
