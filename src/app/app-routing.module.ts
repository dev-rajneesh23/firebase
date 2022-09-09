import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup" , loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpModule)},
  {path:"dashboard" , loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
