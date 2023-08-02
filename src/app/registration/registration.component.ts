import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User=new User("","",0,"");

  constructor(private service:UserRegistrationService) { }

  ngOnInit() {
  }
  

  public registerNow(){
    
      if (this.service.isPasswordValid(this.user.password) && this.service.isAgeVaild(this.user.age)) {
        console.log('Password is valid');
        return this.service.doRegistration(this.user);
      } else {
        alert('Enter valid information')
        console.log('Password does not meet the criteria');
      }
    }
 
 
  
  

}