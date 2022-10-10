import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import '../../interfaces/UserCredential.interface';
import { UserCredential } from '../../interfaces/UserCredential.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl('', Validators.required),
    });
  }

  handleSubmit(): void {
    const userData: UserCredential = this.loginForm.value;
    this.authService.login(userData).subscribe((res) => {
      if (res.error) alert('Credenciales invalidas');
      this.router.navigate(['/']);
    });
  }
}
