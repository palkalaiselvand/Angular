import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { BioinfoService } from 'src/app/services/bioinfo.service';
import { BirthInformation } from 'src/app/models/BirthInformation';
import { of } from 'rxjs';

@Component({
  selector: 'app-bioinfo',
  templateUrl: './bioinfo.component.html',
  styleUrls: ['./bioinfo.component.css']
})
export class BioinfoComponent {
  profileid:string;
biodata:BirthInformation;
  constructor(private loginService:LoginService,
    private bioInfoService:BioinfoService) {
this.profileid=loginService.profile.profleid;
this.getBioInfo();
   }
  getBioInfo():void 
  {
    var a=this.bioInfoService.getBioInfo(this.profileid).then(data=>{
      this.biodata= data as BirthInformation;       
    });    
  }

}
