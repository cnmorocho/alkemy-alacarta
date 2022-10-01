import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './core/pages/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
