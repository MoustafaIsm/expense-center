import { saveUserData } from './../../../../utilities/functions/index';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { User } from 'src/app/interfaces/User';
import { Store } from '@ngrx/store';
import { setUser } from 'src/app/state/actions';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private store: Store
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.getUserInfo();
      }
    });
  }

  ngOnInit() {
    this.getUserInfo();
  }

  openPage(page: string) {
    this.router.navigate(['main/profile/' + page]);
  }

  getUserInfo() {
    this.profileService.getUser(localStorage.getItem('id')).subscribe(
      (response: any) => {
        saveUserData(response.user, false);
        this.store.dispatch(setUser({ user: response.user }));
        this.user = response.user;
      }, (error: any) => {
        if (error.status === 401) {
          presentToast('Please login to view profile');
          this.router.navigate(['login']);
        } else {
          presentToast('Something went wrong');
        }
      });
  }

  logout() {
    localStorage.clear();
    this.store.dispatch(setUser({ user: null }));
    this.router.navigate(['login']);
  }
}
