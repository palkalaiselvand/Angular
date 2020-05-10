import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BirthInformation } from '../models/BirthInformation';
import { isUndefined } from 'util';
import { Observable, of } from 'rxjs';
import Immunization from '../models/Immunization';

@Injectable({
  providedIn: 'root'
})
export class BioinfoService {
birthFilePath: string = 'assets/birthinformation.json';
immuFilePath: string = 'assets/immunization.json';
birthInfo:BirthInformation;
constructor(private http: HttpClient) { }

getBioInfo(profileId:string){  
  return new Promise((resolve, reject) => {
   this.http.get<BirthInformation[]>(this.birthFilePath).subscribe(data => {
      var d = data.find(x => x.profleid == profileId);
      if (isUndefined(d)) {        
        resolve(new BirthInformation());
      }
      else {        
        resolve(d as BirthInformation);
      }
    });
  });
}

getImmuInfo(profileId:string){  
  return new Promise((resolve, reject) => {
   this.http.get<Immunization[]>(this.immuFilePath).subscribe(data => {
      var d = data.find(x => x.profileid == profileId);
      if (isUndefined(d)) {        
        resolve(new Immunization());
      }
      else {        
        resolve(d as Immunization);
      }
    });
  });
}

}
