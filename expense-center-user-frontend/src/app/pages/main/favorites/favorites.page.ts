import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: User[] = [];
  isModalOpen = false;

  constructor(private router: Router, private favoriteService: FavoritesService) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.getFavorites();
      }
    });
  }

  ngOnInit() {
  }

  openSearch() {
    this.isModalOpen = true;
  }

  getFavorites() {
    this.favoriteService.getFavorites().subscribe(data => {
      this.favorites = data.favorites;
    }, (error) => {
      console.log(error);
    });
  }

  unFavoriteUser(id: number) {
    this.favoriteService.unFavoriteUser(id).subscribe(data => {
      this.getFavorites();
    }, (error) => {
      console.log(error);
    });
  }

  favoriteUser(id: number) {
    console.log(id);
  }

}
