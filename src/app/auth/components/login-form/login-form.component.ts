import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.email, Validators.required]),
      userPassword: new FormControl('', [Validators.required, Validators.min(8), Validators.max(16)])
    });
  }

}
