import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GlobService {
  constructor(private rout: Router) { }
  
  
  public secureFront(): void{
    if(localStorage.getItem("token") === null || localStorage.getItem("token") === "0"){
      this.rout.navigate(['login']);
    }
  }
}
