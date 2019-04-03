import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../service/basic-authentication.service';
import {error} from 'util';

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

  constructor(private router: Router, private HAService: HardcodedAuthenticationService, private BAService: BasicAuthenticationService) {
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

  handleBasicAuthLogin() {
    // console.log(this.username);
    this.BAService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        }, error1 => {
          console.log(error1);
          this.invalidLogin = true;
        }
      );
  }
}
