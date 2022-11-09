import { Observable } from 'rxjs';
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { corsHeaders, databaseURL } from 'src/environments/environment';
import { Receipt } from 'src/app/interfaces/Receipt';

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

  updateUser(data: any): Observable<any> {
    return this.http.put(`${databaseURL}/user/update_user`, data, httpOptions);
  }

  getIncomeReceipts(): Observable<any> {
    return this.http.get<any>(`${databaseURL}/user/receipt/get_income_receipts`, httpOptions);
  }

  getOutcomeReceipts(): Observable<any> {
    return this.http.get<any>(`${databaseURL}/user/receipt/get_outcome_receipts`, httpOptions);
  }
}
