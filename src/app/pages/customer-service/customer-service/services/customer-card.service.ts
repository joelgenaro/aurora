import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PolicyCard } from '../../policy-renewals/components/policy-card/models/policy-card.model';
import { TicketCategory } from '../models/ticket-category.model';

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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDNjBDMzg4QzExQjgyMDZCODU5QzNGRDM3QzRFMTFDIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzE3MDc4ODgsImV4cCI6MTY3MTcxMTQ4OCwiaXNzIjoiaHR0cHM6Ly9kZXYuaWRlbnRpdHkuc3RzLmFwZXJhdHVyZXVrLmNvbSIsImF1ZCI6ImFwZXJ0dXJlaWRlbnRpdHlfYXBpIiwiY2xpZW50X2lkIjoiYXBlcnR1cmUtcG93ZXJob3VzZSIsInN1YiI6ImUzZDk0NjQ0LTcwNjUtNDdlMy04NTUwLTQxMWFjNmJlNDk1NCIsImF1dGhfdGltZSI6MTY3MTcwNzg4NiwiaWRwIjoibG9jYWwiLCJyb2xlIjpbIk1hbmFnZW1lbnQgQWRtaW4iLCJhZG1pbiIsIkluc3VyYW5jZSBwb3dlcmhvdXNlIGFkbWluIl0sIm5hbWUiOiJhYXR3aSIsInNpZCI6IkEwNDZERjFFRUZENDkxNTExMzFCRTM5MzBFRjUzOUE5IiwiaWF0IjoxNjcxNzA3ODg4LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJlbWFpbCIsImFkZHJlc3MiLCJhcGVydHVyZWlkZW50aXR5X2FwaSIsImluc3VyYW5jZV9wb3dlcmhvdXNlIl0sImFtciI6WyJwd2QiXX0.IUQTR_cLSiNiDG0EP3RqOrVL7c_RbDotXGK_SNkSkb6E4MhZLtbcu0rtlCDDFTDvPK_eyTUpf_NIdSm1AxsI3prMtapVdv-TpJq6WPvMrBdIlCgbEuakRTiSSbk-F7F2cIrINJQ9Dm_h40t2cJ3riWTUKFmyZpulrQUmkAvAga_AiyS9exSAXcCm9Ql6BkEc96Td8_rgHNDLmgq5uXb0MYclHb9i5EiDDVgHhl43DhhBPTvRcZL6Zdh7p6SJPalo46MC7B-ApyVePA1SLygk1v4scBNjM7HY_j7o-1IVw_oGhprU4-8RV3QmCAEDSwyF2ErbA6GBeiHIwRbGMIEqGQ',
    }),
  };

  // Define API route
  apiFilterURL = `${environment.customerServiceServerURL}/CustomerServiceTicket/Filter`;
  apiPutURL = `${environment.customerServiceServerURL}/CustomerServiceTicket`;
  apiGetCategory = `${environment.customerServiceServerURL}/Resource/Category`;
  apiGetBusiness = `${environment.customerServiceServerURL}/Resource/LineOfBusiness`;
  apiGetRequireData = `${environment.customerServiceServerURL}/Resource/RequiredData`;
  apiEmergencyTypeData = `${environment.customerServiceServerURL}/Resource/Emergency/Types`;

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

  // HttpClient API put() method => Put CustomerServiceTickets
  updateCustomServiceTickets(body: {}) {
    this.http
      .put<PolicyCard>(this.apiPutURL, body, this.httpOptions)
      .subscribe(console.log);
  }

  // HttpClient API get() method => get categories in CustomerServiceTicket
  getCategory() {
    return this.http
      .get<TicketCategory>(this.apiGetCategory, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => get businessed in CustomerServiceTicket
  getBusiness() {
    return this.http
      .get<TicketCategory>(this.apiGetBusiness, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => get products in CustomerServiceTicket
  getProduct(businessId: number) {
    const apiGetProducts = `${environment.customerServiceServerURL}/Resource/Product/${businessId}`;
    return this.http
      .get<TicketCategory>(apiGetProducts, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => get required data in CustomerServiceTicket
  getRequiredData() {
    return this.http
      .get<TicketCategory>(this.apiGetRequireData, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => get emergencyTypes in CustomerServiceTicket
  getEmerencyTypeData() {
    return this.http
      .get<TicketCategory>(this.apiEmergencyTypeData, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => get emergencyInitiateItems in CustomerServiceTicket
  getEmergencyInitiateItems(TypeId: number) {
    const apiGetInitiates = `${environment.customerServiceServerURL}/Resource/Emergency/InitiateItems/${TypeId}`;
    return this.http
      .get<TicketCategory>(apiGetInitiates, this.httpOptions)
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
