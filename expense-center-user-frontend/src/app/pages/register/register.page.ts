import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string;
  password: string;
  dateOfBirth: Date;
  gender: string;

  constructor() { }

  ngOnInit() {
  }

  changeEmail(newValue: string) {
    this.email = newValue;
  }

  changePassword(newValue: string) {
    this.password = newValue;
  }

  changeDateOfBirth(newValue: Date) {
    this.dateOfBirth = newValue;
  }

  changeGender(newValue: string) {
    this.gender = newValue;
  }

}
