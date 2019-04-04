import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {BasicAuthenticationService} from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private BAService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const username = 'user';
    // const password = 'password';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const basicAuthHeaderString = this.BAService.getAuthenticatedToken();
    const username = this.BAService.getAuthenticatedUser();
    if (basicAuthHeaderString && username) {
      request = request.clone({
      setHeaders : {
        Authorization: basicAuthHeaderString
      }
    });
    }

    return next.handle(request);
  }
}
