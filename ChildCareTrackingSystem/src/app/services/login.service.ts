import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Profile } from '../models/profile';
import { HttpClientModule } from '@angular/common/http';
import { isUndefined } from 'util';
import { Todo } from '../models/Todo';
import { promise } from 'protractor';
import { rejects } from 'assert';
import Immunization from '../models/Immunization';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  filePath: string = 'assets/profile.json';
  response: Profile[];
  loginvalidation = [];
  public isValiUser: boolean = false;
  public profile: Profile;
  getUrl: string = 'https://localhost:44308/api/Immunization';
  sampleUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  public login(username: string, password: string){
    return new Promise((resolve, reject) => {
      this.http.get<Profile[]>(this.filePath).subscribe(data => {
        var d = data.find(x => x.username == username && x.password == password);
        if (isUndefined(d)) {
          this.isValiUser = false;
          this.profile = new Profile();
          resolve([false, new Profile()]);
        }
        else {
          this.isValiUser = true;
          this.profile = d;
          resolve([d != undefined, d]);
        }
      });
    });
  }

  loginV1(): Observable<Immunization[]> {
    return this.http.get<Immunization[]>(this.getUrl);
    // return this.http.get<Todo[]>(this.sampleUrl);
  }
}