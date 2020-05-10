import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../../../services/login.service';
import { Profile } from 'src/app/models/profile';
import { isUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isInValidUser: boolean = false;
  isLogiPageNeeded: boolean = true;
  @Output() outputToParent = new EventEmitter();

  constructor(private loginService: LoginService,
    public router: Router) { }

  ngOnInit(): void {
    this.loginService.loginV1().subscribe(data => {
      console.log(data);
    });
  }
  login() {
    this.loginService.login(this.username, this.password).then((data) => {
      if (data[0] === true) {
        this.isInValidUser = false;
        this.isLogiPageNeeded = false;
        this.outputToParent.emit(data);
        this.router.navigateByUrl('dashboard');
      }
      else {
        this.isInValidUser = true;
        this.isLogiPageNeeded = true;
        this.outputToParent.emit([false, Profile]);
      }
    });
  }
  inputchange() {
    this.isInValidUser = false;
  }
}
