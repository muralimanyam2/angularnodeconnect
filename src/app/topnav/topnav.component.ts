import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ErrorHttpHandleService } from '../shared/error-http-handle.service';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  // public outerNav: boolean = true;
  // public innerNav: boolean = false;

  public _isAuthenticLogin: any;

  constructor(private auth: AuthService, private router: Router, public errHandle: ErrorHttpHandleService) {
  }

  ngOnInit(): void {
    this.errHandle.isAuthenticatedObs.subscribe((isAuth: any) => {
      this._isAuthenticLogin = isAuth;
    });
    if (localStorage.getItem('access_token')) {
      this._isAuthenticLogin = true;
      this.router.navigateByUrl('/users');
    }
  }

  logout() {
    this.errHandle.makeIsAuthenticateFalse();
    this.auth.doLogout();
  }
}
