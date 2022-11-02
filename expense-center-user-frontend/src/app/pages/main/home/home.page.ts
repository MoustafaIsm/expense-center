import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isModalOpen = false;
  filters = [
    { name: 'Filter 1', isActive: false },
    { name: 'Filter 2', isActive: false },
    { name: 'Filter 3', isActive: false }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSearch() {
    this.isModalOpen = true;
  }

  openUserProfile(id: number) {
    this.router.navigate(['main/user-profile', id]);
  }

  disableFilter(index: number) {
    this.filters[index].isActive = !this.filters[index].isActive;
  }

}
