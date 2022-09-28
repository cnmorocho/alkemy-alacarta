import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../interfaces/UserCredential.interface';
import { UserCredential } from '../interfaces/UserCredential.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(userData: UserCredential) {
    this.http.post('http://challenge-react.alkemy.org/', userData).subscribe(res => {
      console.log(res);
    });
  }
}
