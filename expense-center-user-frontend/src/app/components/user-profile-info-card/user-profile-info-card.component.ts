import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile-info-card',
  templateUrl: './user-profile-info-card.component.html',
  styleUrls: ['./user-profile-info-card.component.scss'],
})
export class UserProfileInfoCardComponent implements OnInit {
  @Input() type: string;
  @Output() changePageEmmiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  openPage(page: string) {
    this.changePageEmmiter.emit(page);
  }

}
