import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private loginService:LoginService,
    public router: Router) {     
      console.log('contact '+this.loginService.isValiUser);
      if(!this.loginService.isValiUser)
this.router.navigateByUrl('login');
    }

  ngOnInit(): void {
  }

}
