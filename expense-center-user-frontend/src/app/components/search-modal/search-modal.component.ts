/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {
  @Output() isModalOpenChange = new EventEmitter<boolean>();
  _isModalOpen = false;
  users: User[] = [];

  constructor(private router: Router, private searchService: SearchService) { }

  @Input()
  get isModalOpen() { return this._isModalOpen; }
  set isModalOpen(value: boolean) { this._isModalOpen = value; }

  ngOnInit() { }

  setOpen(value: boolean) {
    this.isModalOpenChange.emit(value);
  }

  searchForValue(target: any) {
    const username = target.value;
    if (username.length > 0) {
      this.searchService.search(username).subscribe((data) => {
        this.users = data.users;
      });
    } else {
      this.users = [];
    }
  }

  openUserProfile(id: number) {
    this.setOpen(false);
    setTimeout(() => {
      this.router.navigate(['main/user-profile', id]);
    }, 1000);
  }

}
