import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  id: number;
  user: User;

  constructor(
    private activaitedRoute: ActivatedRoute,
    private profileService: ProfileService,
  ) {
    this.id = this.activaitedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const temp = this.profileService.getUser('' + this.id).subscribe(
      (data) => {
        this.user = data.user;
      }, (error) => presentToast('Something went wrong'));
  }

}
