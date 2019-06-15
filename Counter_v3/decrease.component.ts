import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decrease',
  template: `
    <button (click)="dec.emit()" class="decrease">-</button>
  `,
  styles: []
})
export class DecreaseComponent implements OnInit {
  @Output() dec = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
