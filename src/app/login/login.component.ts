import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:boolean = true;
  forgetPwdForm:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  forgetPwd() {
  	this.loginForm = false;
  	this.forgetPwdForm = true;
  }

  showLoginForm() {
  	this.loginForm = true;
  	this.forgetPwdForm = false;
  }
}
