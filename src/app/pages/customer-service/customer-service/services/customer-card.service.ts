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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQyMEQyRkE1M0Q1MTA2NjlDQzI5NUNCRUY0MDBCN0NGIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE2NTU4MTYsImV4cCI6MTY3MTY1OTQxNiwiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTY0Njk2OCwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6IjE5OTQ4MkMyMkQ2MUU2NUVGOTkxRTBDQjIyMDNDM0QzIiwiaWF0IjoxNjcxNjU1ODE2LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.xsTQLPSf77Qw6W36Tli246dQmugD9bS0NWiV3H9NBbsHw6cFm2fRdTjwPp1KdGop-qpyOSpZkvLkro74Tr3yntl3R-MY94FQ0560GfqoexWJzPy5MYjxtOS6-mK9n7TD1X2T_BNskCYYumP_Luy8_KdwNGl6EJfjaba_eSDtIcV4wJNKDXLvHiallOnH3yjFd_o1nWk588Iriu9T3AenvrXX5RV0yKtqTuq7d00e893ZGI5YS5rkST1JYyQXJUkniRmW2gropGYY-9-Yct1AmX5pChN6wVpI_TXfn2XpwdGeMRb22iSuLCrQl00jhoMznBTO-U5gPkxsWR8weZ5yrw',
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
