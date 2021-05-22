import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKENT = '6720dc978e955cf72a3f1b6aec12f1ffb081c5f9';
    request = request.clone( {setHeaders: { Authorization: 'Bearer ' + TOKENT }})
    return next.handle(request)
            // imprimimos el error desde el interceptor
            .pipe(catchError((error: HttpErrorResponse) => {
              console.log(error);
            return throwError(error);
    }));
  }
}
