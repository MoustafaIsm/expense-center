import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { Router, NavigationEnd } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: User[] = [];
  isModalOpen = false;

  constructor(
    private router: Router,
    private favoriteService: FavoritesService,
    private toastController: ToastController,
  ) {
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

  openUserProfile(id: number) {
    this.router.navigate(['main/user-profile', id]);
  }

  getFavorites() {
    this.favoriteService.getFavorites().subscribe(data => {
      this.favorites = data.favorites;
    }, (error) => {
      if (error.status === 401) {
        this.presentToast('Please login to view feeds');
        this.router.navigate(['login']);
      } else {
        this.presentToast('Something went wrong');
      }
    });
  }

  unFavoriteUser(id: number) {
    this.favoriteService.unFavoriteUser(id).subscribe(data => {
      this.getFavorites();
    }, (error) => {
      if (error.status === 401) {
        this.presentToast('Please login to view feeds');
        this.router.navigate(['login']);
      } else {
        this.presentToast('Something went wrong');
      }
    });
  }

  favoriteUser(id: number) {
    console.log(id);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
    });

    await toast.present();
  }

}
