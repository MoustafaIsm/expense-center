import { User } from 'src/app/interfaces/User';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() user: User;
  @Output() clickHander = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  openUserProfile(id: number) {
    this.clickHander.emit(id);
  }

}
