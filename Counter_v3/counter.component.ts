import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="container">
      <app-increase (inc)="inc()"></app-increase>
      <div class="counter">{{ counter }}</div>
      <app-decrease (dec)="dec()"></app-decrease>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counter = 0;
  inc() {
    this.counter += 1;
  }
  dec() {
    if (this.counter > 0) this.counter -= 1;
  }
  constructor() {}

  ngOnInit() {}
}
