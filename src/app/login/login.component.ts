import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';

import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }
  showpasswordbool:boolean=false;
  password:string="password";
  formValidBool:boolean=false;

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pswd:new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
  }

  showpassword(boolVal:boolean){
    if(boolVal){
      this.password="password";
      this.showpasswordbool=false;
    }else{
      this.password="text";
      this.showpasswordbool=true;
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.http.post(environment.API_URL+'login',this.loginForm.value, {responseType: 'text'})
      .subscribe((res:any)=>{
        if(res){
          let token = res;
          console.log(res)
        }
        console.log('respone -> '+res.toString());
      });
  }

}
