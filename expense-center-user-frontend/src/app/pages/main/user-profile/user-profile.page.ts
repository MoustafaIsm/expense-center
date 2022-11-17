import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit, OnDestroy {
  id: number;
  user: User;
  subscriptions: Subscription[] = [];

  constructor(
    private activaitedRoute: ActivatedRoute,
    private profileService: ProfileService,
  ) {
    this.id = this.activaitedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getUser() {
    const temp = this.profileService.getUser('' + this.id).subscribe(
      (data) => {
        this.user = data.user;
      }, (error) => presentToast('Something went wrong'));
    this.subscriptions.push(temp);
  }

}
