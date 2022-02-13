import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Constants } from './shared/Constant';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
  apiUrl: string = environment.API_BASE_URL;
  BaseHeader() {
    let headers = {
      Authorization: 'Bearer ' + Constants.GET_TOKEN(),
    };
    return headers;
  }
  constructor(public http: HttpClient) {}

  invokeService<T>(methodType: string, path: string, payload: any = null) {
    switch (methodType) {
      case 'POST':
        return this.postMethod(path, payload);
      case 'PUT':
        return this.putMethod(path, payload);
      case 'DELETE':
        return this.deleteMethod(path, payload);
      default:
        return this.getMethod(path, payload);
    }
  }

  postMethod(path: any, payload: any) {
    return this.http
      .post<any>(
        this.apiUrl + '/' + path,
        { payload },
        {
          headers: this.BaseHeader(),
        }
      )
      .pipe(catchError(this.handleError));
  }
  putMethod(path: any, payload: any) {
    return this.http
      .put<any>(this.apiUrl + '/' + path, {
        headers: this.BaseHeader(),
      })
      .pipe(catchError(this.handleError));
  }
  deleteMethod(path: any, payload: any) {
    return this.http
      .delete<any>(this.apiUrl + '/' + path, {
        headers: this.BaseHeader(),
      })
      .pipe(catchError(this.handleError));
  }
  getMethod(path: any, payload: any) {
    return this.http
      .get<any>(this.apiUrl + '/' + path, {
        headers: this.BaseHeader(),
      })
      .pipe(catchError(this.handleError));
  }
  public errmsg: any;
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      this.errmsg = `A client-side or network error occurred. ${error.error} `;
      // return error;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );

      this.errmsg = `The backend returned an unsuccessful response code.`;

      // return throwError(error);
    }
    // Return an observable with a user-facing error message.
    return throwError(this.errmsg);
  }
}
