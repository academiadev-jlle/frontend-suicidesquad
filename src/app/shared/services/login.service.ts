import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { map } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = '/api/oauth/token';
  access_token = '';

  constructor(
    private oauth: OAuthService,
    private http: HttpClient,
  ) { }

  login(login: Login): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('front:frontend')
      })
    };

    const data = new FormData();
    data.append('username', login.email);
    data.append('password', login.senha);
    data.append('grant_type', 'password');

    return this.http
      .post(this.url, data, httpOptions)
      .pipe(
        map(tokenDTO => {
          this.access_token = tokenDTO['access_token'];
          return tokenDTO;
        })
      );
  }

  getAuthorizationHeader() {
    return `Bearer ${this.access_token}`;
  }

  isUserLogged() {
    return !!this.access_token;
  }
}