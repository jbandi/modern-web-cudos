import { Routes } from '@angular/router';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {DataScreenComponent} from './data-screen/data-screen.component';

export const routes: Routes = [
  {path: '', component: HomeScreenComponent},
  {path: 'data', component: DataScreenComponent},
  {path: '**', redirectTo: ''},
];
