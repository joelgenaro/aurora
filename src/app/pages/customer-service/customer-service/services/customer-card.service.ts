import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PolicyCard } from '../../policy-renewals/components/policy-card/models/policy-card.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerCardService {
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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IkYwOEUzNkI0MjRFNEE1RkY0RUJCNTQyMTVFQTYwNTFCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE2NTQ4NzUsImV4cCI6MTY3MTY1ODQ3NSwiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTY0Njk2OCwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6IjE5OTQ4MkMyMkQ2MUU2NUVGOTkxRTBDQjIyMDNDM0QzIiwiaWF0IjoxNjcxNjU0ODc1LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.EIaxXT9sWCAzeIDXcf5xA3T7zf5U-o_p_20TmVsVPwzcMujoB_gEMYzuMXwdUGt_368WJXBJtERuMTYaKeE0VZvStJEDLk5VnUhjXziJbN2_OpxRSbDmJJfb1SSjEvowoK770HcELutr0ZG5553dh1A3xV_SaEoeeFnAWsqQ-Q2VGhiIsvAKR1cJZwjWm2MpT1Dz7ir2GxGHtejIhU9hk2Vjup7oimqjuVTUa3viH8rPgKwVGTuVy3AFPcZxFqGRg-ASZEa2W-BAwF0RVRdpaHi4rc_zYVq1aFn3XVgiGSq377ppfNXQz7CCFYWs0j7IMA-J6KKo0T0xr2pqZpzZUw',
    }),
  };

  // Define Filter API
  apiFilterURL = `${environment.customerServiceServerURL}/CustomerServiceTicket/Filter`;
  apiPutURL = `${environment.customerServiceServerURL}/CustomerServiceTicket`;

  // HttpClient API post() method => Get customer service tickets
  getCutomerServiceTickets(): Observable<PolicyCard> {
    return this.http
      .post<PolicyCard>(this.apiFilterURL, {}, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Filter customer service tickets
  filterCustomerServiceickets(option: {}): Observable<any> {
    return this.http
      .post<PolicyCard>(this.apiFilterURL, option, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Put PolicyRenewalTickets
  updateCustomServiceTickets(body: {}) {
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
