import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PolicyCard } from '../components/policy-card/models/policy-card.model';

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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IkYwOEUzNkI0MjRFNEE1RkY0RUJCNTQyMTVFQTYwNTFCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE2NDk2MjAsImV4cCI6MTY3MTY1MzIyMCwiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTY0Njk2OCwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6IjE5OTQ4MkMyMkQ2MUU2NUVGOTkxRTBDQjIyMDNDM0QzIiwiaWF0IjoxNjcxNjQ5NjIwLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.JhuRWPY8Fzb4NOu2fs6NU6fBIauQX8JPJnkqIbG39KLnC8EXB3R2jCENcQSQhbge2nSf3-L3zVf3VBS0rT_5nMfnvkC16sCFyEUU61XCwFvi__yowLlkr0LgSGBBOGCsAZSx9kcrZS6cWYjZpWXYsc57p8CtAe8h8Eq_JLmKRMo1Isf47eXZMPiQNQxbF3gcsrCu89t9pDA87x99FVR7Edjqa2yke0g_1mEv0FJQRGkGwgFa59n0Vqj39E1MmhFO9v93QuPlsa9XhA2gqhJFkstw7yyo5U4eia5I8JLdJlVrl4K0AL2r_awzLaiEHEywTE-_EIRUtQE2tm9sQctT2A',
    }),
  };

  // Define Filter API
  apiFilterURL = `${environment.customerServiceServerURL}/PolicyRenewalTicket/Filter`;
  apiPutURL = `${environment.customerServiceServerURL}/PolicyRenewalTicket`;

  // HttpClient API post() method => Get PolicyRenewalTickets
  getPolicyRenewalTickets(): Observable<any> {
    return this.http
      .post<PolicyCard>(this.apiFilterURL, {}, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Filter PolicyRenewalTickets
  filterPolicyRenewalTickets(option: {}): Observable<any> {
    return this.http
      .post<PolicyCard>(this.apiFilterURL, option, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Filter PolicyRenewalTickets
  updatePolicyRenewalTickets(body: {}) {
    this.http
      .put<PolicyCard>(this.apiPutURL, body, this.httpOptions)
      .subscribe(console.log);
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
