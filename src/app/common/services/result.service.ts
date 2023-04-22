import { Injectable } from '@angular/core';
import { Result } from '../models/result';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  find(ip:string){
    return this.http.get(this.getUrl(ip),this.httpOptions)
  }
  private getUrl(ip:string){
    return `${BASE_URL}${ip}`
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