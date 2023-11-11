import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '404', 
    component: PageNotFoundComponent
  },
  {
    path: '**', 
    redirectTo: '/404',
  },
];