import { Injectable } from '@angular/core';
import { Result } from '../models/result';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CurrentIP } from '../models/currentIP';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
const BASE_URL = 'https://wookie.codesubmit.io/ipcheck?ip='

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  model='192.212.174.101';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer WookieIP2022',
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient){}
  find(ip:string):Observable<Result>{
    return this.http.get<Result>(this.getUrl(ip),this.httpOptions).pipe(
      catchError(this.handleError))
  }
  private getUrl(ip:string):string{
    return `${BASE_URL}${ip}`
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.message
        );
        alert("There is a problem. Please try again later")
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getIPAddress(): Observable<CurrentIP> {
    return this.http.get<CurrentIP>('https://api.ipify.org?format=json').pipe(
      catchError(this.handleError)
    );
  }
}
