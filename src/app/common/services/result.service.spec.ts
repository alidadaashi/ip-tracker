import { TestBed } from '@angular/core/testing';

import { ResultService } from './result.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurrentIP } from '../models/currentIP';

describe('ResultService', () => {
  let service: ResultService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[ResultService]
    });
    service = TestBed.inject(ResultService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return current IP address', () => {
    const mockResponse: CurrentIP = { ip: '159.146.45.189' };
 
    service.getIPAddress().subscribe(res => {
      // expect(res.ip).toEqual(mockResponse.ip);
      expect(res.ip).toMatch(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)
    });
 
    const req = httpMock.expectOne('https://api.ipify.org?format=json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });


  
});
