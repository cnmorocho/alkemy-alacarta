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
      userEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      userPassword: new FormControl('', Validators.required)
    });
  }

  handleSubmit(): void {
    const {userEmail, userPassword} = this.loginForm.value;
    const errors = this.loginForm.get('userEmail')?.errors; 
    console.log(errors);

    if(errors )
    alert(`El usuario con email ${userEmail} ha sido logueado!`);
  }

}
