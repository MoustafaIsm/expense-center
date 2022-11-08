import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { locationAPIKey } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url = 'https://api.geoapify.com/v1/geocode';

  constructor(private http: HttpClient) { }

  getAddress(lat: number, lng: number): Observable<any> {
    return this.http.get(`${this.url}/reverse?lat=${lat}&lon=${lng}&apiKey=${locationAPIKey}`);
  }

}
