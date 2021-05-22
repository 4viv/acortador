import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  private url: string = 'https://api-ssl.bitly.com/v4/shorten';

  //  ===  lo pasamos a el interceptor
  // private token: string = '6720dc978e955cf72a3f1b6aec12f1ffb081c5f9';

  constructor(private http: HttpClient) { }

  getUrl(nombreUrl: string): Observable<any> {

    //  ==  Se pasa al interceptor
    // const tokenHeader = new HttpHeaders( { Authorization: 'Bearer ' + this.token } );
    const body = { long_url: nombreUrl };

    return this.http.post(this.url, body )
        /* Imprimiendo el error
        .pipe(catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError(error);
        }));
        */
  }
}
