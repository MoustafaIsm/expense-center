/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { databaseURL, corsHeaders } from 'src/environments/environment';
import { User } from 'src/app/interfaces/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    ...corsHeaders
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${databaseURL}/auth/login`, { email, password }, httpOptions);
  }

  register(email: string, password: string, dateOfBirth: string, gender: string): Observable<any> {
    const user = {
      email,
      password,
      date_of_birth: dateOfBirth,
      gender
    };
    return this.http.post<User>(`${databaseURL}/auth/register`, user, httpOptions);
  }
}
