import { Injectable } from '@angular/core';
import { Result } from '../models/result';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentIP } from '../models/currentIP';

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
    return this.http.get<Result>(this.getUrl(ip),this.httpOptions)
  }
  private getUrl(ip:string):string{
    return `${BASE_URL}${ip}`
  }
  getIPAddress(): Observable<CurrentIP> {
    return this.http.get<CurrentIP>('https://api.ipify.org?format=json');
  }
  
  initialResult: Result = {
    ip: "192.212.174.101",
    isp: "SpaceX- Starlink",
    location: {
      "city": "Mountain View",
      "country": "US",
      "geonameId": 5375480,
      "lat": 37.38605,
      "lng": -122.08385,
      "postalCode": "94035",
      "region": "California",
      "timezone": "UTC-05:00"
    }
  }
}
