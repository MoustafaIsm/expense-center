import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.password);
  }

  changeEmail(newValue: string) {
    this.email = newValue;
  }

  changePassword(newValue: string) {
    this.password = newValue;
  }
}
