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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDNjBDMzg4QzExQjgyMDZCODU5QzNGRDM3QzRFMTFDIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE3MTg1NDgsImV4cCI6MTY3MTcyMjE0OCwiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTcxMzQxOCwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6Ijg4OUM0NzI0NUFCRDY0RkEyMzIxOTRCOENDMzc0Mjg4IiwiaWF0IjoxNjcxNzE4NTQ4LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.D9nkRZBk8CGHK-uHUUytjeMM4jeW8QvYWfh6qxBfkEo-sGs-w5vCgk540jEmWq-KqXqvy6QadnDAWv0C-RsMCgbeQT6Llup_1IloWMmgaTZe3er-5bWamk5kQ2spZgb9Rq5A-tHQPr7ArnngtiS9OjJS1GxNZtYJBHecEZPv0QKEBp7bkBuHkPHpqndxHQG_Kb0tVw5vmnk6e2qbGPHnbZC55oDq1HPr3n1Nwb5zuT7rDTp-LtFG3wBVfh-vP7VS1UH6kRlaXoORK9VdpzKPkg8Hv_czOuBZkK4zuyldnbpAAyqKI5IQXu65PW917rAy7gluZUTdz7Lx837dzExyLw',
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

  // HttpClient API post() method => create PolicyRenewalTickets
  filterPolicyRenewalTickets(option: {}): Observable<any> {
    return this.http
      .post<PolicyCard>(this.apiFilterURL, option, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => update PolicyRenewalTickets
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
