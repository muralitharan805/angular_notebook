import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './shared/loader.service';

export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // throw new Error("Method not implemented.");
    console.log('NoopInterceptor ', req);

    return next.handle(req);
  }
}
@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService implements HttpInterceptor {
  private totalRequests = 0;
  constructor(private loaderService: LoaderService) {
    console.log('created loder ');
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    this.showLoader();
    this.totalRequests++;
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.totalRequests--;
            if (this.totalRequests < 0 || !this.totalRequests) {
              this.totalRequests = 0;
              this.hideLoader();
            } else {
              this.showLoader();
            }
          }
        },
        (err: any) => {
          this.totalRequests = 0;
          this.hideLoader();
        }
      )
    );
  }

  private showLoader(): void {
    this.loaderService.loadingOn();
  }
  private hideLoader(): void {
    this.loaderService.loadingOff();
  }
}
