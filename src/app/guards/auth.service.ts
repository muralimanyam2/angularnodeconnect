import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Auth Services
import { AuthService as Authentication } from '../shared/auth.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Authentication, route: ActivatedRouteSnapshot, private router: Router) { }

  canAllow() {
    if (this.auth.isLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false
    }
  }
}
