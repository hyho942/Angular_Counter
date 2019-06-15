import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-increase',
  template: `
    <button (click)="inc.emit()" class="increase">+</button>
  `,
  styles: []
})
export class IncreaseComponent implements OnInit {
  @Output() inc = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
