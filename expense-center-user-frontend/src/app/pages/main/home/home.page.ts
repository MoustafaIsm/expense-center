import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { FeedsService } from 'src/app/services/feeds/feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  feeds: User[] = [];
  isModalOpen = false;
  filters = [
    { name: 'Filter 1', isActive: false },
    { name: 'Filter 2', isActive: false },
    { name: 'Filter 3', isActive: false }
  ];

  constructor(
    private router: Router,
    private feedsService: FeedsService,
    private favoriteService: FavoritesService
  ) { }

  ngOnInit() {
    this.getFeeds();
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

  getFeeds() {
    this.feedsService.getFeeds().subscribe((data) => {
      this.feeds = data.users;
    });
  }

  unFavoriteUser(id: number) {
    this.favoriteService.unFavoriteUser(id).subscribe(data => {
      this.feeds.find(user => user.id === id).isFavorited = false;
    }, (error) => {
      console.log(error);
    });
  }

  favoriteUser(id: number) {
    this.favoriteService.favoriteUser(id).subscribe(data => {
      this.feeds.find(user => user.id === id).isFavorited = true;
    }, (error) => {
      console.log(error);
    });
  }

}

