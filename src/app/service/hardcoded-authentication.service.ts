import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('im in authenticate');
    console.log('before: ' + this.isUserLoggedIn());

    if (username === 'jpozarycki' && password === 'haslo') {
      console.log('im in authenticate and true');
      console.log('after: ' + this.isUserLoggedIn());
      return true;
    } else { return false; }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
