import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  constructor(private router: Router, private HAService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    if (this.HAService.authenticate(this.username, this.password)) {
      sessionStorage.setItem('authenticatedUser', this.username);
      this.router.navigate(['welcome', this.username]);
      console.log(this.username);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
