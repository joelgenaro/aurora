import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { PolicyCard } from '../components/policy-card/models/policy-card.model';
import { PolicyCardsInprocess } from './mock-policy-cards-inprocss';
import { PolicyCardsApproved } from './mock-policy-cards-approved';
import { PolicyCardsProcessed } from './mock-policy-cards-processed';
import { PolicyCardsClosed } from './mock-policy-cards-closed';

@Injectable({
  providedIn: 'root',
})
export class PolicyCardService {
  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for CustomerService RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA1QkJGNUJGRDg0Q0ZGM0U5REU4OTIyQjcyMUM4NDc1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE0MTkxNDMsImV4cCI6MTY3MTQyMjc0MywiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTQxNDg4OCwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6IkRGMUQ2QUU5OENGNDdEMDBCMzJDRUY3MTVGNDEwRDQwIiwiaWF0IjoxNjcxNDE5MTQzLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.S2vCn9PsQtO7BXTpF0njQT-HVD4F97hk33isxMHQgwAvIDzAauDXyrF-QSgo4jHQqnIjslPc8-rlnvjSJfMSssGv2mTVpGkJxBg8fDU8wgZSKt5k1QwKAEd_sIKnbOYXBi_P-GucTIOByTiJFARUvpkOc56D6N12Mv2LuyzcT-ZctDmBNp4S6UYkScqRNbd4WM1woPpFfjUwaXDggc0dzpjGyJYmwlMrSmVwibaoeawDFe81jBsXC0LkRUimAR_keY0jRrD_ka5c_r_8Y6b7zdODd9lBn5uLkTAZqH7ts5CKll7ngTXHvC5XVC1ybzBnWbROxOZ4boZ7oIOoLgUcdw',
    }),
  };

  // Define Filter API
  apiFilterURL = `${environment.customerServiceServerURL}/PolicyRenewalTicket/Filter`;

  // HttpClient API post() method => Get inQueueTickets
  getPolicyRenewalTickets(): Observable<PolicyCard> {
    return this.http
      .post<PolicyCard>(this.apiFilterURL, {}, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getInProcessCards(): Observable<PolicyCard[]> {
    const cards = of(PolicyCardsInprocess);
    return cards;
  }

  getProcessedCards(): Observable<PolicyCard[]> {
    const cards = of(PolicyCardsProcessed);
    return cards;
  }

  getApprovedCards(): Observable<PolicyCard[]> {
    const cards = of(PolicyCardsApproved);
    return cards;
  }

  getClosedCards(): Observable<PolicyCard[]> {
    const cards = of(PolicyCardsClosed);
    return cards;
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
