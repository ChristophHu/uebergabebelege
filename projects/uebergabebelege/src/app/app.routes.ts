import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    // { path: 'auth-adfs', loadChildren: () => import('./modules/auth-adfs/auth-adfs.module').then(m => m.AuthAdfsModule) },
  { path: '', 
    component: LayoutComponent,
    //canActivate: [AuthAdfsGuard],
    //canActivateChild: [AuthAdfsGuard],
    data: { layout: 'mobile' }, 
    children: [
    //   { path: 'logout', component: LogoutComponent, canActivate: [], canActivateChild: [] },
    //   { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) }
    ]
  },
  { path: '**', redirectTo: '' }
]
