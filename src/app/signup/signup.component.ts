import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { ErrorHttpHandleService } from '../shared/error-http-handle.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showpasswordbool: boolean = false;
  password: string = "password";
  formValidBool: boolean = false;

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pswd: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required])
  })
  constructor(private http: HttpClient, private toastr: ToastrService, private errHandle: ErrorHttpHandleService) { }

  ngOnInit(): void {
    console.log(environment.API_URL + 'signup');
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
    //signup
    this.http.post(environment.API_URL + 'signupABC', this.signupForm.value, { responseType: 'text' })
      .subscribe(res => {
        console.log('respone -> ' + res);
        this.toastr.success('Data added successfully', 'Success');
      }, (err) => {
        this.errHandle.errorHandle(err, 'signup');
      });
  }

}
