import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User=new User("","",0,"");


  message:any;

  constructor(private service:UserRegistrationService) { }

  ngOnInit() {}

 
  public loginNow(){
  return this.service.login(this.user);
 
  }

}
