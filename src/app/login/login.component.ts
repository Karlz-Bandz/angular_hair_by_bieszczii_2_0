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

  login2: Login = {userName: 'Karol', userPassword: 'karol'};

  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  public goToAdmin(loginForm: {userName: string, userPassword: string}): void{

    if(loginForm.userName === this.login2.userName && loginForm.userPassword === this.login2.userPassword){
        this.rout.navigate(['admin/home']);
    }else{
      
      console.log("Error");
    }

  }

}
