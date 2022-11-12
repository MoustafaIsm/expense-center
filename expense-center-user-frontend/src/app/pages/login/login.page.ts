import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { saveUserData } from 'src/utilities/functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.email === '' && this.password === '') {
      this.error = 'Please fill all fields!';
      return;
    }
    this.error = '';
    this.authService.login(this.email, this.password).subscribe(
      (data) => {
        saveUserData(data.user);
        this.router.navigate(['/main']);
      }, (error) => {
        if (error?.error.message === 'Unauthorized') {
          this.error = 'Wrong email or password!';
          return;
        }
        if (error?.error.message === 'You are banned') {
          this.error = 'You are banned!';
          return;
        }
      });
  }
}
