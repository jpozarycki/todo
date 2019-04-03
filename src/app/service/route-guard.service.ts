import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HardcodedAuthenticationService} from './hardcoded-authentication.service';
import {BasicAuthenticationService} from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private BAService: BasicAuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.BAService.isUserLoggedIn()) {
      return true;
      this.router.navigate(['login']);

    } else {
      return false;
    }
  }
}
