import { Observable } from 'rxjs';
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { corsHeaders, databaseURL } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
    ...corsHeaders
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${databaseURL}/user/get_user/${id}`, httpOptions);
  }

  updateUser(data: any): Observable<any> {
    return this.http.post(`${databaseURL}/user/update_user`, data, httpOptions);
  }

  getIncomeReceipts(): Observable<any> {
    return this.http.get<any>(`${databaseURL}/user/receipt/get_income_receipts`, httpOptions);
  }

  getOutcomeReceipts(): Observable<any> {
    return this.http.get<any>(`${databaseURL}/user/receipt/get_outcome_receipts`, httpOptions);
  }

  getSubCategories(): Observable<any> {
    return this.http.get<any>(`${databaseURL}/user/receipt/get_sub_categories`, httpOptions);
  }

  addReceipt(data: any): Observable<any> {
    return this.http.post<any>(`${databaseURL}/user/receipt/add_receipt`, data, httpOptions);
  }
}
