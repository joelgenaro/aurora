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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDNjBDMzg4QzExQjgyMDZCODU5QzNGRDM3QzRFMTFDIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE5MDI3NTAsImV4cCI6MTY3MTkwNjM1MCwiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTg3OTQyNSwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6IjM4MkEwQ0QzQjQ1MzFBMURBMDBBMTU2MUMwQTUwOUY1IiwiaWF0IjoxNjcxOTAyNzUwLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.RoY0M5SvojN7SisjCDQ_9ZWjCERHIQvpoJHpc7-oiNkvbj4qF9Lwls2RfcQ6Jftg8dvtKz3aibRlG34jm-4S9kEN8b4v-JxODYNpBcXvWLmfyBhv_RL3IJXh8IlkMIOroG6Y84tKOve644t6y6L-xUXN7_tdU-Hyh2hyiMgLQ1jaLrCbuo7bIDTHDZCuh1bg3bmAKan65lMdcdx0OIkmeAcRvFE2AbCbOhEUmJ5JxashzNJrVP0KqUb4m1248WHVDG2ExDsFoissDBh4uRxcY_qUMGEicJic1NtQdUpKcRRGBMEHu-wJyVqi4j1dx5D6B5pOxTbX5MQREWJoET-r2A',
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
