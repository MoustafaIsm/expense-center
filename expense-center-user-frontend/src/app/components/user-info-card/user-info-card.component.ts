import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent implements OnInit {
  @Input() user: User;
  @Output() usernameClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onUsernameClick() {
    this.usernameClick.emit(this.user.userDetails.id);
  }

}
