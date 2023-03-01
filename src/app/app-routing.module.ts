import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthService } from './shared/auth.service';
const routes: Routes = [
  { path: 'sign-up', component: SignupComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
