import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="container">
      <button (click)="inc()" class="increase">+</button>
      <div class="counter">{{ counter }}</div>
      <button (click)="des()" class="decrease">-</button>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counter = 0;

  inc() {
    this.counter += 1;
  }
  des() {
    if (this.counter > 0) this.counter -= 1;
  }
  constructor() {}

  ngOnInit() {}
}
