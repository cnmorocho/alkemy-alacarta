import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';




@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
