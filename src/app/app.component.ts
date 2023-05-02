import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlideNav } from './slidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideNav]
})
export class AppComponent {
  title = 'angular_hair_by_bieszczii_2_1';


  @ViewChild("navscript") navscript: ElementRef | undefined;

    //  isMenuOpen = false;

     show = false;

    

     constructor(private rout: Router) { }

     get stateOfNav(){
      return this.show ? 'show' : 'hide';
    }

     public toggleMenu(): void {
      
      if(this.show)
      {
        // this.isMenuOpen = false;
        this.show = false;
        
      }else{
        // this.isMenuOpen = true;
        this.show = true;
        
      }
 }

    
     public goToLoginPage(): void{


      if(localStorage.getItem("token") === null || localStorage.getItem("token") === "0"){
        this.rout.navigate(['login']);
      }else{
        this.rout.navigate(['admin/home']);
      }
      
    }







}
