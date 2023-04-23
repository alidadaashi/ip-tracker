import { Component, Input } from '@angular/core';
import { Result } from '../common/models/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() response:Result={
    ip: "...",
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
}
