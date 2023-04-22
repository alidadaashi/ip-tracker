import { Component, OnInit } from '@angular/core';
import { Result } from './common/models/result';
import { ResultService } from './common/services/result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IP-Checker';
  response:Result={
    ip: "8.8.8.8",
    isp: "SpaceX - Starlink",
    location: {
      "city": "NY",
      "country": "",
      "geonameId": 0,
      "lat": 37.38,
      "lng": -122,
      "postalCode": "1100",
      "region": "Brooklyn",
      "timezone": "UTC-05:00"
    }
  }
  isRepetitive:boolean=false;
  constructor(private resultService: ResultService){}
  ngOnInit(): void {
    sessionStorage.clear();
  }
  checkIP(inputValue:string){
    let localData:string | null = localStorage.getItem(inputValue);
    if(localData !== null){
      this.response = JSON.parse(localData);
      this.isRepetitive=true;
    }else{
      this.resultService.find(inputValue).subscribe((res:any) => {
        this.response=res;
        this.isRepetitive=false;
        this.saveDataToLocalStorage(res)
      })
    }
  }
  saveDataToLocalStorage(data:Result){
    localStorage.setItem(data.ip,JSON.stringify(data));
    
  }
}
