import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer';

  constructor(private http: HttpClient) { }

  getAddress(lat: number, lng: number): Observable<any> {
    return this.http.get(`${this.url}/reverseGeocode?location=${lng},${lat}`);
  }

}
