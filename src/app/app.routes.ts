import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NumPadComponent } from './numpad';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'numpad', component: NumPadComponent }
];
