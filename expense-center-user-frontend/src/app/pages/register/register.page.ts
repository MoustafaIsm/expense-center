import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { stringifyDate } from 'src/utilities/functions';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    if (this.email !== '' && this.password !== '' && this.dateOfBirth !== undefined) {
      if (verifiedEmail(this.email) && verifiedPassword(this.password)) {
        this.authService.register(this.email, this.password, stringifyDate(this.dateOfBirth), this.gender);
      }
    }
  }

}
