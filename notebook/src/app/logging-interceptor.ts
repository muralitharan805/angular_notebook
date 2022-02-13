import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export class LoggingIntercepter implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // throw new Error("Method not implemented.");

    return next.handle(req).pipe(
      tap({
        // Succeeds when there is a response; ignore other events
        next: (event) => {
          console.log(event);
        }, // Operation failed; error is an HttpErrorResponse
        error: (error) => {
          console.log(error);
        },
      }),
      finalize(() => {
        const elapsed = Date.now();
        const msg = `${req.method} "${req.urlWithParams}"
           $in ${elapsed} ms.`;
        // this.messenger.add(msg);

        console.log(msg);
      })
    );
  }
}
