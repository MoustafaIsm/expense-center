/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { corsHeaders, databaseURL } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    ...corsHeaders
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser(id: string) {
    return this.http.get(`${databaseURL}/user/get_user/${id}`, httpOptions);
  }
}
