import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {User} from '../models/user.model';
import { Observable, of } from 'rxjs';
import {AuthService} from './login.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'accept': '*/*',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://backend-suicide-squad.herokuapp.com/usuarios/';

  constructor(private http: HttpClient, private auth: AuthService) {}

  create(user: User): Observable<any> {
    const usuario = new User().deserialize(user);
    return this.http.post<User>(this.url, usuario, httpOptions);
  }

  get(id): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.auth.getAuthorizationHeader()
    });

    return this.http.get(this.url + id, { headers });
  }

}
