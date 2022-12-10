import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_hair_by_bieszczii_2_1';


  @ViewChild("navscript") navscript: ElementRef | undefined;

     isMenuOpen = false;

     constructor(private rout: Router) { }

     public toggleMenu(): void {
      
      this.isMenuOpen = true;

    
      
     }

     public hideMenu(): void{
        this.isMenuOpen = false;
    }
    public goToLoginPage(): void{


      if(localStorage.getItem("token") === "0"){
        this.rout.navigate(['login']);
      }else{
        this.rout.navigate(['admin/home']);
      }
      
    }







}
