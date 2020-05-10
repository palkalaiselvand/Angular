import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {LoginService} from '../../../services/login.service';
import { BioinfoService } from 'src/app/services/bioinfo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

hasMenuOpen:boolean=false;
menuTxt:string="Collapse Menu";
  constructor(private loginService:LoginService,
    public router: Router,
    public bioInfo:BioinfoService) {     
      if(!this.loginService.isValiUser)
this.router.navigateByUrl('login');
  }

  ngOnInit(): void {
  }
  sidebarCollapse(){
this.hasMenuOpen=!this.hasMenuOpen;
if(this.hasMenuOpen)
{
  this.menuTxt="Expand Menu";
}
else{
  this.menuTxt="Collapse Menu";
}
console.log(this.hasMenuOpen);
  }

}
