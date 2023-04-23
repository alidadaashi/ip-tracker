import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ResultService } from './common/services/result.service';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';
import { MapComponent } from './map/map.component';
import { FormsModule, NgForm } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
describe('AppComponent', () => {
  let app: AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputComponent,
        ResultComponent,
        MapComponent
      ],
      imports:[HttpClientTestingModule, FormsModule, LeafletModule]
    }).compileComponents();
  });


  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'IP-Checker'`, () => {
    expect(app.title).toEqual('IP-Checker');
  });

});
