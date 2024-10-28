import { Component, signal } from '@angular/core';
import {JsonPipe} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg"/>
      </a>
    </div>

    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular!</h3>


    <router-outlet/>
    <div class="card">
      <button type="button" (click)="increment()">Count {{ count() }}</button>
    </div>

    <div class="card">
      <a routerLink="/app">Go to demo ...</a>
    </div>

    <p class="read-the-docs">
      <a href="https://analogjs.org" target="_blank">Docs</a> |
      <a href="https://github.com/analogjs/analog" target="_blank">GitHub</a> |
      <a href="https://github.com/sponsors/brandonroberts" target="_blank">
        Sponsor
      </a>
    </p>
    {{debug()}}
  `,
  styles: `
    .logo {
      will-change: filter;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .read-the-docs > * {
      color: #fff;
    }

    @media (prefers-color-scheme: light) {
      .read-the-docs > * {
        color: #213547;
      }
    }
  `,
  imports: [
    JsonPipe,
    RouterOutlet,
    RouterLink
  ]
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }

  debug() {
    console.log('Rendering HomeComponent');
  }
}
