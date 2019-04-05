import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:boolean = true;
  newUserForm:boolean = false;
  forgetPwdForm:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  forgetPwd() {
  	this.forgetPwdForm = true;
  	this.loginForm = false;
  	this.newUserForm = false;
  }

  showLoginForm() {
  	this.loginForm = true;
  	this.newUserForm = false;
  	this.forgetPwdForm = false;
  }

  showNewUserForm() {
  	this.newUserForm = true;
  	this.loginForm = false;
  	this.forgetPwdForm = false;
  }
}
