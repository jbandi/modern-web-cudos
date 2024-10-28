import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  template: `
    <a routerLink="/app">Index</a>
    <a routerLink="/app/second">Second</a>
    <router-outlet/>
  `,
  styles: ``
})
export default class FirstPage {

}
