import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: User[] = [];
  isModalOpen = false;

  constructor(private favoriteService: FavoritesService) { }

  ngOnInit() {
    this.getFavorites();
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
