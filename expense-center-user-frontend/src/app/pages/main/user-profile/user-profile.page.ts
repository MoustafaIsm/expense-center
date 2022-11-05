import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  id: number;

  constructor(private activaitedRoute: ActivatedRoute) {
    this.id = this.activaitedRoute.snapshot.params.id;
    console.log('Id received: ' + this.id);
  }

  ngOnInit() {
  }

}
