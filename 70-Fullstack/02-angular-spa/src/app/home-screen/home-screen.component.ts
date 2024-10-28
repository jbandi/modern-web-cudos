import {Component, signal} from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `
    <h1>
      Home Screen
    </h1>
    <h2>{{count()}}</h2>
    <button (click)="increment()">Increment</button>
    {{debug()}}
  `,
  styles: `:host { text-align: center}`
})
export class HomeScreenComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }

  debug() {
    console.log('Rendering HomeScreen');
  }
}
