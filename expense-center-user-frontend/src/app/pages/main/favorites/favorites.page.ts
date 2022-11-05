import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  isModalOpen = false;

  constructor() { }

  ngOnInit() {
  }

  openSearch() {
    this.isModalOpen = true;
  }

}
