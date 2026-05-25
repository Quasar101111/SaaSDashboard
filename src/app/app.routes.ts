import { Routes } from '@angular/router';
import { Signup } from './pages/signup/signup';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    //lazy loading
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup').then((m) => m.Signup),
  },
  // {
  //   //eager loading
  //   path: 'signup',
  //   component: Signup,
  // },
  //
  { path: '', component: Home },
];
