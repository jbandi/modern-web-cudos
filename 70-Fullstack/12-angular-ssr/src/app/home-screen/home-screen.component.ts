import {Component, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';

@Component({
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1>
      Home Screen: {{data }}
    </h1>
    <h2>{{count()}}</h2>
    <button (click)="increment()">Increment</button>
    {{debug()}}
  `,
  styles: `:host { text-align: center}`
})
export class HomeScreenComponent {
  count = signal(0);
  data = '';

  // constructor() {
  //   fetch('http://localhost:3000')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('Home Screen: data fetched',data);
  //       this.data = data.text;
  //     })
  // }

  increment() {
    this.count.update((count) => count + 1);
  }

  debug() {
    console.log('Rendering HomeScreen');
  }
}
