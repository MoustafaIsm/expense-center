import { getUser } from 'src/app/state/selectors';
import { saveUserData } from './../../../../utilities/functions/index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { User } from 'src/app/interfaces/User';
import { select, Store } from '@ngrx/store';
import { setUser } from 'src/app/state/actions';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User = null;
  isModalOpen = false;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private store: Store
  ) { }

  ngOnInit() {
    this.getUserInfo();
    this.store.pipe(select(getUser)).subscribe(
      (user: User) => {
        this.user = user;
      }, (error: any) => {
        presentToast('Something went wrong');
      });
  }

  openPage(page: string) {
    this.router.navigate(['main/profile/' + page]);
  }

  openModal() {
    this.isModalOpen = true;
  }

  getUserInfo() {
    this.profileService.getUser(localStorage.getItem('id')).subscribe(
      (response: any) => {
        saveUserData(response.user, false);
        this.store.dispatch(setUser({ user: response.user }));
        this.store.pipe(select(getUser)).subscribe(
          (user: User) => {
            this.user = user;
          }, (error: any) => {
            presentToast('Something went wrong');
          });
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
    presentToast('Logged out successfully');
    this.router.navigate(['login']);
  }

  handleRefresh(event) {
    this.getUserInfo();
    event.target.complete();
  }
}
