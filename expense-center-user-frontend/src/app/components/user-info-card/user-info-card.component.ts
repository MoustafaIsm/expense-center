import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent implements OnInit {
  @Output() usernameClick = new EventEmitter<number>();
  id = 1;

  constructor() { }

  ngOnInit() { }

  onUsernameClick() {
    this.usernameClick.emit(this.id);
  }

}
