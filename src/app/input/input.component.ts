import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  // inputValue:string = ""
  @Output() check = new EventEmitter();
  @Input() inputValue!:string;
}
