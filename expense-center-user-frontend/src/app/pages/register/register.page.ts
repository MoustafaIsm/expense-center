import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { verifyEmail, verifyPassword } from 'src/utilities/functions';
import { genders } from 'src/utilities/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  error: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  gender = 'male';
  genders = genders;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    if (this.email === '' && this.password === '' && this.dateOfBirth === undefined) {
      this.error = 'Please fill all fields!';
      return;
    }
    if (!verifyEmail(this.email)) {
      this.error = 'Please enter a valid email!';
      return;
    }
    if (!verifyPassword(this.password)) {
      this.error = 'Password must be at least 8 characters long!';
      return;
    }
    this.error = '';
    this.authService.register(this.email, this.password, '' + this.dateOfBirth, this.gender).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );

  }

}
