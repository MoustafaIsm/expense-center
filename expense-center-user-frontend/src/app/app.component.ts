import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private platform: Platform, private router: Router) {
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
