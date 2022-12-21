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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZGOTNERjI2NkI5MDY3REZFRDlFNjUwNzE0NDI1Q0E2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE2NTY5NTIsImV4cCI6MTY3MTY2MDU1MiwiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTY0Njk2OCwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6IjE5OTQ4MkMyMkQ2MUU2NUVGOTkxRTBDQjIyMDNDM0QzIiwiaWF0IjoxNjcxNjU2OTUyLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.V9y4AlArFyAmPnJLqtFfvYOszGSJFP3E49dIDypEINKprRc9ihJE1bnL-PgzkIH-do4JTd5rUHGK4SlCn3w1X3fTtTjtpDEcppKZSsbkqQLOFpu9tHd-QsuHVkU_rZphRiAZJnFGzCxLxcwSPQSnKtlvMrrIsNLddWcl_3VONLiWQOTusAlkXSgbYdCr8iuZocicCFVxrayYGLjRyqQdVEzlW9XOAVvyl-Z-vRq2Efr8oImaTD-7uIH10enZet3-Rdw14YNXNakUWR1AUN-9EEHbcX2U6vyrLzEz2A3zK2D5y84_ti_IxTROXK0VFMsA1QNWGZWV9b4WE7LiE260Lg',
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
