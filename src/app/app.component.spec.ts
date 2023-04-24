import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ResultService } from './common/services/result.service';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Result } from './common/models/result';



describe('AppComponent', () => {
  let app: AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let service: ResultService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputComponent,
        ResultComponent,
        MapComponent
      ],
      imports:[HttpClientTestingModule, FormsModule, LeafletModule],
      providers:[ResultService]
    }).compileComponents();
  });


  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    service = TestBed.inject(ResultService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'IP-Checker'`, () => {
    expect(app.title).toEqual('IP-Checker');
  });


  it('should return information of given IP address', () => {
    const sampleIP : string = "8.8.8.8";
    const mockResponse: Result = {
      ip: "1.1.1.1",
      isp: "...",
      location: {
        city: "",
        country: "",
        geonameId: 0,
        lat: 37.38,
        lng: -122,
        postalCode: "",
        region: "",
        timezone: ""
      }
    };
  
    service.getIPInformation(sampleIP).subscribe(res => {
      expect(res.ip).toMatch(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)
    });
  
    const req = httpMock.expectOne('https://wookie.codesubmit.io/ipcheck?ip=' + sampleIP);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

    
});
