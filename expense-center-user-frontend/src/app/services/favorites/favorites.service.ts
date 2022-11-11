/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { corsHeaders, databaseURL } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    ...corsHeaders
  })
};

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  getFavorites(): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any>(`${databaseURL}/user/favorite/get_favorites`, httpOptions);
  }

  unFavoriteUser(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<any>(`${databaseURL}/user/favorite/unfavorite_user`, { favorited_id: id }, httpOptions);
  }

  favoriteUser(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<any>(`${databaseURL}/user/favorite/favorite_user`, { favorited_id: id }, httpOptions);
  }
}
