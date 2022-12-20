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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IkYwOEUzNkI0MjRFNEE1RkY0RUJCNTQyMTVFQTYwNTFCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE1MjAwMjksImV4cCI6MTY3MTUyMzYyOSwiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTQ1NzkyNiwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6IkFDNDhDRTA2NzZBOTFCQjg5Mzk1OUYwNUQ2QkU1QkVFIiwiaWF0IjoxNjcxNTIwMDI5LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.jpljJlq-9i7rFmyxtzVKdqSRHa6DErC5VuJt7Q3tvkmY3_ilg5U2NumypQLm7srJROx1qcfDmLRsOlefPZmEsqqX_N4hmr3Vr9Jh-W8edp6VjNpvihwc3JE19NCfyUnmLCq6UHpO1q0hz_d3VYUTBxA_3gBPlhW5O9zdnp-63SnXxlH4y7DC8orDZVzEMmzBPDj17TSBE8N2bPWx74rCBM8UDV5IqoSI1TV3GN-pPBPTJ6BeuaMjgK2TQpoiNUnNM_A1kn7doKc-uKWQmfyYIdnlj2Hby-EFtMgadId4qBxerRcATX7qopTU61UsBZkEGleSRAJMhMKR4D2Sm3cl4A',
    }),
  };

  // Define Filter API
  apiFilterURL = `${environment.customerServiceServerURL}/CustomerServiceTicket/Filter`;

  // HttpClient API post() method => Get inQueueTickets
  getCutomerServiceTickets(): Observable<PolicyCard> {
    return this.http
      .post<PolicyCard>(this.apiFilterURL, {}, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
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
