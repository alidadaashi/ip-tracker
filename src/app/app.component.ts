import { Component, OnInit } from '@angular/core';
import { Result } from './common/models/result';
import { ResultService } from './common/services/result.service';
import { CurrentIP } from './common/models/currentIP';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IP-Checker';
  response:Result={
    "ip": "...",
    "isp": "...",
    "location": {
      "city": "...",
      "country": "",
      "geonameId": 0,
      "lat": 37.38,
      "lng": -122,
      "postalCode": "...",
      "region": "...",
      "timezone": "..."
    }
  }
  constructor(private resultService: ResultService){}
  currentIP:string="";
  ngOnInit(): void {
    sessionStorage.clear();
    this.resultService.getIPAddress().subscribe((data: CurrentIP) => {
      this.currentIP=data.ip;
      this.checkIP(this.currentIP);
    });
    
  }
  checkIP(inputValue:string){
    let localData:string | null = localStorage.getItem(inputValue);
    if(localData !== null){
      this.response = JSON.parse(localData);
    }else{
      this.resultService.find(inputValue).subscribe((res:Result) => {
        this.response=res;
        this.saveDataToLocalStorage(res)
      })
    }
  }
  saveDataToLocalStorage(data:Result){
    localStorage.setItem(data.ip,JSON.stringify(data));
    
  }
}
