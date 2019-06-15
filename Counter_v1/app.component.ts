import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <button (click)="inc()" class="increase">+</button>
      <div class="counter">{{ counter }}</div>
      <button (click)="des()" class="decrease">-</button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  counter = 0;
  des() {
    if (this.counter > 0) this.counter -= 1;
  }
  inc() {
    this.counter += 1;
  }
}
