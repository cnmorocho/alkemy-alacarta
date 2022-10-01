import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { LoginResponse } from '../interfaces/LoginResponse.interface';
import { UserCredential } from '../interfaces/UserCredential.interface';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(userCredentials: UserCredential): Observable<any> {
    return this.http.post('http://challenge-react.alkemy.org/', userCredentials).pipe(
      map((res: any) => {
        this.saveToken(res);
      })
    )
  }

  /* private handleError(error) {

  } */

  public isLogged(): boolean {
    return localStorage.getItem('token') != null ? true : false;
  }

  private saveToken(token: LoginResponse) {
    localStorage.setItem('token', token.token);
  }

  public logout() {
    localStorage.removeItem('token');
  }

}