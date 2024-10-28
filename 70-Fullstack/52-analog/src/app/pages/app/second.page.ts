import { Component } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {injectLoad} from '@analogjs/router';
import {load} from './second.server';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1>
      Data Screen
    </h1>
    <h2>{{data() | json}}</h2>
  `,
  styles: ``
})
export default class AppSecondPage {
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
  constructor() {
    console.log('AppSecondPage constructor');
  }
}
