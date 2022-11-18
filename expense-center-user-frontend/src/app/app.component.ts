import { getUser } from 'src/app/state/selectors';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private platform: Platform, private router: Router, private store: Store) {
    this.platform.ready().then(() => {
      const id = localStorage.getItem('id');
      if (id) {
        this.router.navigate(['main']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
