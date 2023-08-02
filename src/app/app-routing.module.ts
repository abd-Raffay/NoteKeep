import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
   {path:"register",component:RegistrationComponent},
   {path:"login",component:LoginComponent},
   {path:"nav",component:NavComponent},

   {path:"home",component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }