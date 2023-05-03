import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Login } from './login';
import { LoginService } from './login.service';
import { Animate } from '../animate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [Animate]
})
export class LoginComponent implements OnInit {

  login: Login | undefined;
  errorMessage: string = "Zły login lub hasło";
  successMessage: string | undefined;
  invalidLogin: boolean = false;
  loginSuccess: boolean = false;

  show = false;

  get stateOfImg(){
    return this.show ? 'show' : 'hide';
  }


  

  private apiUrl = environment.apiBaseUrl;

  

  

  constructor(private rout: Router,
    private authService: LoginService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 100);
  }





public goToAdmin(loginForm: {userName: string, password: string}): void {
   this.authService.login(loginForm.userName, loginForm.password).subscribe(
    () => {
      this.invalidLogin = false
      this.loginSuccess = true;
      this.successMessage = "Logi success";
      this.rout.navigate(['admin/home']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    }
    
   )

         
}








}
