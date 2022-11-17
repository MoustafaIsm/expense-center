import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { FeedsService } from 'src/app/services/feeds/feeds.service';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  feeds: User[] = [];
  isModalOpen = false;

  constructor(
    private router: Router,
    private feedsService: FeedsService,
    private favoriteService: FavoritesService,
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
    this.feedsService.increaseClickCount({ id }).subscribe(
      data => {
        this.router.navigate(['main/user-profile', id]);
      }, (error) => {
        if (error.status === 401) {
          presentToast('Please login to view the profile');
          this.router.navigate(['login']);
        } else {
          presentToast('Something went wrong');
        }
      });
  }

  getFeeds() {
    this.feedsService.getFeeds().subscribe((data) => {
      this.feeds = data.users;
    }, (error) => {
      if (error.status === 401) {
        presentToast('Please login to view feeds');
        this.router.navigate(['login']);
      } else {
        presentToast('Something went wrong');
      }
    });
  }

  unFavoriteUser(id: number) {
    this.favoriteService.unFavoriteUser(id).subscribe(data => {
      presentToast('User removed from favorites');
      this.feeds.find(user => user.id === id).isFavorited = false;
    }, (error) => {
      if (error.status === 401) {
        presentToast('Please login to view feeds');
        this.router.navigate(['login']);
      } else {
        presentToast('Something went wrong');
      }
    });
  }

  favoriteUser(id: number) {
    this.favoriteService.favoriteUser(id).subscribe(data => {
      presentToast('User added to favorites');
      this.feeds.find(user => user.id === id).isFavorited = true;
    }, (error) => {
      if (error.status === 401) {
        presentToast('Please login to view feeds');
        this.router.navigate(['login']);
      } else {
        presentToast('Something went wrong');
      }
    });
  }

}

