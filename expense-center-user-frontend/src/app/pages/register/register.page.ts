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
  gender = 'male';
  genders = ['Male', 'Female', 'Other'];

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log('Registering...');
    console.log('Email: ', this.email);
    console.log('Password: ', this.password);
    console.log('Date of birth: ', this.dateOfBirth);
    console.log('Gender: ', this.gender);
  }

}
