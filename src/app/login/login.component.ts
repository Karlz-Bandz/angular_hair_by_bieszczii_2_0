import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login | undefined;

  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  public goToAdmin(loginForm: {userName: string, userPassword: string}): void{

    this.login = loginForm;

     this.rout.navigate(['admin/home']);
  }

}
