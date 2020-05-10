import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private loginService:LoginService,
    public router: Router) {     
      if(!this.loginService.isValiUser)
this.router.navigateByUrl('login');
    }
  ngOnInit(): void {
  }

}
