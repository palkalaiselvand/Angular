import { Component } from '@angular/core';

import {LoginService} from './services/login.service';
import { Profile } from './models/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChildCareTrackingSystem';
  isValidLogin:boolean=false;
  userDetails:Profile;
  welcomenote:string;
  login:string="Login";
  constructor(private loginService:LoginService){
    
  }  
  loginEventListener(loginData:[boolean,Profile])
{
  this.isValidLogin=loginData[0];
  this.userDetails=loginData[1];
this.welcomenote='Welcome '+this.userDetails.username+' !';
if(loginData[0])
{
  this.login="Logout";
}
else{
  this.login="Login";
}
}
}
