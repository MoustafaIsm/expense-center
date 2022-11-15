import { saveUserData } from './../../../../utilities/functions/index';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { User } from 'src/app/interfaces/User';

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
        this.user = response.user;
      }, (error: any) => {
        console.log(error);
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
