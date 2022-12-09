import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

//public loginuser: Login | undefined;

public userName: string | undefined;
public password: string | undefined;

private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  login(login: string, password: string){
    return this.http.get(`${this.apiUrl}/api/auth/login`, 
    { headers: {authorization: this.createBasicAuthToken(login, password)}}).pipe(map((res) => {
          this.userName = login;
          this.password = password;
          this.registerSuccessfulLogin(login, password);
    }));
  }


  createBasicAuthToken(login: string, password: string){
      return 'Basic '+ window.btoa(login + ":" + password);
  }

  registerSuccessfulLogin(login: string, password: string){
        //environment.loginMain = login;
       // environment.passwordMain = password;
        localStorage.setItem("1", login);
        localStorage.setItem("2", password);

  }
}
