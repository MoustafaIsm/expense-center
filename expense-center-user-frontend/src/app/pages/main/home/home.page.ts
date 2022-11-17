import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { FeedsService } from 'src/app/services/feeds/feeds.service';
import { presentToast } from 'src/utilities/functions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  feeds: User[] = [];
  isModalOpen = false;
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private feedsService: FeedsService,
    private favoriteService: FavoritesService,
  ) { }

  ngOnInit() {
    this.getFeeds();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
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
    const temp = this.feedsService.increaseClickCount({ id }).subscribe(
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
    this.subscriptions.push(temp);
  }

  getFeeds() {
    const temp = this.feedsService.getFeeds().subscribe(
      (data) => {
        this.feeds = data.users;
      }, (error) => {
        if (error.status === 401) {
          presentToast('Please login to view feeds');
          this.router.navigate(['login']);
        } else {
          presentToast('Something went wrong');
        }
      });
    this.subscriptions.push(temp);
  }

  unFavoriteUser(id: number) {
    const temp = this.favoriteService.unFavoriteUser(id).subscribe(
      data => {
        presentToast('User removed from favorites');
        this.feeds.find(user => user.id === id).isFavorited = false;
      }, error => {
        if (error.status === 401) {
          presentToast('Please login to view feeds');
          this.router.navigate(['login']);
        } else {
          presentToast('Something went wrong');
        }
      });
    this.subscriptions.push(temp);
  }

  favoriteUser(id: number) {
    const temp = this.favoriteService.favoriteUser(id).subscribe(
      data => {
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
    this.subscriptions.push(temp);
  }

}

