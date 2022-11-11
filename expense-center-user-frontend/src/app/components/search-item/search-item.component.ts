import { User } from 'src/app/interfaces/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() { }

}
