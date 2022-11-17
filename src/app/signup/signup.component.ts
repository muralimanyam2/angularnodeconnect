import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';

import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showpasswordbool:boolean=false;
  password:string="password";
  formValidBool:boolean=false;

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pswd:new FormControl('', [Validators.required]),
    dob:new FormControl('', [Validators.required])
  })
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(environment.API_URL+'signup');
    
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
  console.log(this.signupForm.value);
  //signup
  this.http.post(environment.API_URL+'signup',this.signupForm.value)
    .subscribe(res=>{
      console.log('respone -> '+res.toString());
    });
}

}
