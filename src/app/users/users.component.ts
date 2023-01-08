import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList:any=[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.API_URL+'employee').subscribe((res:any)=>{
      console.log(res);
      this.usersList = res;
    });
    console.log(environment.API_URL+'employee');
  }

}
