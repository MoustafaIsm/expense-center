import { saveUserData } from './../../../../utilities/functions/index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  openPage(page: string) {
    this.router.navigate(['main/profile/' + page]);
  }

  getUserInfo() {
    this.profileService.getUser(localStorage.getItem('id')).subscribe(
      (response: any) => {
        saveUserData(response.user);
      }, (error: any) => {
        console.log(error);
      });
  }
}
