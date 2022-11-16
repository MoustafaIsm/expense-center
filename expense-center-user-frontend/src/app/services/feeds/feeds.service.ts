/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { corsHeaders, databaseURL } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    ...corsHeaders
  })
};

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private http: HttpClient) { }

  getFeeds(): Observable<any> {
    httpOptions.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any>(`${databaseURL}/user/get_feed`, httpOptions);
  }

  increaseClickCount(data: JSON) {
    httpOptions.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.http.post(`${databaseURL}/user/increase_user_clicks`, data, httpOptions);
  }
}
