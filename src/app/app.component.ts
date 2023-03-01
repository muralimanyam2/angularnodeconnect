import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularnodeconnect';

  constructor(private auth: AuthService, private router: Router) {
  }


}
