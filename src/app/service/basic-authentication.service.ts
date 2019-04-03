import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {

    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    );
    // console.log("Execute Hello World Bean Service")
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);  }

  getAuthenticatedUser() {
    return  sessionStorage.getItem('authenticaterUser');
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }

  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}
