import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {JsonPipe} from '@angular/common';
import {tap} from 'rxjs';

@Component({
  selector: 'app-data-screen',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1>
      Data Screen
    </h1>
    <h2>{{ data() | json }}</h2>
    {{ debug() }}
  `,
  styles: `:host {
    text-align: center
  }`
})
export class DataScreenComponent {
  data = toSignal( inject(HttpClient).get('http://localhost:3000'));
  // data = toSignal(
  //   inject(HttpClient)
  //     .get('http://localhost:3000')
  //     .pipe(tap(() => console.log('DataScreenComponent: data fetched'))));

  debug() {
    console.log('Rendering DataScreen');
  }
}
