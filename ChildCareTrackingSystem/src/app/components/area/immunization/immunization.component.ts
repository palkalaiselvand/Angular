import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { BioinfoService } from 'src/app/services/bioinfo.service';
import Immunization from 'src/app/models/Immunization';

@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.component.html',
  styleUrls: ['./immunization.component.css']
})
export class ImmunizationComponent {
  profileid:string;
  immuData:Immunization;
  constructor(private loginService:LoginService,
    private bioInfoService:BioinfoService) {
      this.profileid=loginService.profile.profleid;
      this.getImmuInfo();
    }
   getImmuInfo():void 
   {
     var a=this.bioInfoService.getImmuInfo(this.profileid).then(data=>{
       this.immuData= data as Immunization;    
       console.log(data);   
     });    
     console.log(this.immuData);
   }
 


}
