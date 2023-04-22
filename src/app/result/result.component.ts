import { Component, Input } from '@angular/core';
import { Result } from '../common/models/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() response!:Result; // Should be checked later
}
