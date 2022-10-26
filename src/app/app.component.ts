import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_hair_by_bieszczii_2_1';


  @ViewChild("navscript") navscript: ElementRef | undefined;

     isMenuOpen = false;



     public toggleMenu(): void {
      //document.getElementById("navbar-script").style.display = "block";
      this.isMenuOpen = true;

    
      
     }

     public hideMenu(): void{
        this.isMenuOpen = false;
    }







}
