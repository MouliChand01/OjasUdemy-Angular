import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeDashBoardComponent } from './employe-dash-board/employe-dash-board.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signin",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"passwordChange",component:PasswordComponent},
  {path:"EmployeDashBoard",component:EmployeDashBoardComponent},
  {path:"EmployeProfile",component:ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
