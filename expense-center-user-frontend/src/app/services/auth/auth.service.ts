/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { databaseURL, corsHeaders } from 'src/environments/environment';

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

  login(email: string, password: string): Observable<boolean> {
    if (email !== '' && password !== '') {
      this.http.post(`${databaseURL}/auth/login`, { email, password }, httpOptions).subscribe((response: any) => {
        console.log(response);
      });
      return of(true);
    }
    return of(false);
  }
}
