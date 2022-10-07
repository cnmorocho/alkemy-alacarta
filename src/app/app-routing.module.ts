import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { ListPageComponent } from './core/pages/list-page/list-page.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
