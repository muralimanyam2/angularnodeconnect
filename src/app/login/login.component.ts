import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { environment } from 'src/environments/environment';

import { ToastrService } from 'ngx-toastr';

import { TopnavComponent } from '../topnav/topnav.component';

import { ErrorHttpHandleService } from '../shared/error-http-handle.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [TopnavComponent],
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, private errHandle: ErrorHttpHandleService, private toastr: ToastrService, private Topnav: TopnavComponent, private Router: Router) { }
  showpasswordbool: boolean = false;
  password: string = "password";
  formValidBool: boolean = false;

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pswd: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
  }

  showpassword(boolVal: boolean) {
    if (boolVal) {
      this.password = "password";
      this.showpasswordbool = false;
    } else {
      this.password = "text";
      this.showpasswordbool = true;
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.http.post(environment.API_URL + 'login', this.loginForm.value).subscribe((res: any) => {
      if (res) {
        console.log(res);
        // res = JSON.parse(res);
        res = res[0];
        if (res.token) {
          this.authService.signIn(res);
          this.toastr.success('Logged in successfully', ' Success', { timeOut: 2000 });
          this.errHandle.makeIsAuthenticateTrue();
          this.Topnav.ngOnInit();
        }
      }
    }, (err) => {
      this.errHandle.errorHandle(err, 'signup');
      console.log(err)
    });
  }

  logout() {
    console.log("logout")
    this.errHandle.makeIsAuthenticateFalse();
    this.authService.doLogout();
  }

  trail() {
    this.http.get(environment.API_URL + 'trailId', { responseType: 'text' }).subscribe((res: any) => {
      console.log(res)
    });
  }
}
