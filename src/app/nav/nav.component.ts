import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service:UserRegistrationService,private router: Router) { }
  activeflag=0;
  userid=0
  ngOnInit():void {
    
    this.activeflag=this.service.setflag();
    this.userid=this.service.setid()
    setTimeout(() => { this.ngOnInit() }, 1000 * 1)
    }
    
    login() {
      this.router.navigate(['/login']); 
    }

    register() {
      this.router.navigate(['/register']); 
    }
     //SignOut User
    public SignOut(){
    return this.service.Signout()
  }
   
  }


