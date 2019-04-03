import {Component, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn = false;

  constructor(private BAService: BasicAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.HAService.isUserLoggedIn();
  }

}
