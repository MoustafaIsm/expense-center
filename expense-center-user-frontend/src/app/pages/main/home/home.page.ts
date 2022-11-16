import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { FeedsService } from 'src/app/services/feeds/feeds.service';
import { ToastController } from '@ionic/angular';

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
    private favoriteService: FavoritesService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getFeeds();
  }

  openSearch() {
    this.isModalOpen = true;
  }

  handleRefresh(event) {
    this.getFeeds();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  openUserProfile(id: number) {
    this.feedsService.increaseClickCount({ id });
    this.router.navigate(['main/user-profile', id]);
  }

  disableFilter(index: number) {
    this.filters[index].isActive = !this.filters[index].isActive;
  }

  getFeeds() {
    this.feedsService.getFeeds().subscribe((data) => {
      this.feeds = data.users;
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
      this.presentToast('User removed from favorites');
      this.feeds.find(user => user.id === id).isFavorited = false;
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
    this.favoriteService.favoriteUser(id).subscribe(data => {
      this.presentToast('User added to favorites');
      this.feeds.find(user => user.id === id).isFavorited = true;
    }, (error) => {
      if (error.status === 401) {
        this.presentToast('Please login to view feeds');
        this.router.navigate(['login']);
      } else {
        this.presentToast('Something went wrong');
      }
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
    });

    await toast.present();
  }

}

