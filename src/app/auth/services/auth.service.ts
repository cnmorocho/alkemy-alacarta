import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
  ErrorResponse,
  LoginResponse,
} from '../interfaces/LoginResponse.interface';
import { UserCredential } from '../interfaces/UserCredential.interface';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(userCredentials: UserCredential): Observable<any> {
    return this.http
      .post('http://challenge-react.alkemy.org/', userCredentials)
      .pipe(
        map((res: any) => {
          this.saveToken(res);
          return res;
        }),
        catchError((err: ErrorResponse) => {
          return throwError(() => new Error('¡Credenciales incorrectas!'));
        })
      );
  }

  public isLogged(): boolean {
    return localStorage.getItem('token') != null ? true : false;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  private saveToken(token: LoginResponse) {
    localStorage.setItem('token', token.token);
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
