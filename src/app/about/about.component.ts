import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from './image';
import { ImageService } from './image.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('popState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class AboutComponent implements OnInit {

   constructor(private imageService: ImageService,
              private rout: Router) { }

  imageProfil: Image[] = []; 

  imageOneProfil : Image | undefined;
  

  ngOnInit(): void {
    
    this.getImageProfil();
    setTimeout(() => {
      this.show = true;
    }, 100);

  
      this.setProfile(0);
      
      setTimeout(() => {
        this.setterTest();
      }, 1000)
    
  }

  show = false;
  
  get stateOfImg(){
    return this.show ? 'show' : 'hide';
  }

  public doSetTimeout(i: number): void{
    setTimeout(() => {
      this.imageOneProfil = this.imageProfil[i];
      
    }, i * 5000);
  }

  public setterTest(): void{
    
    for(let i = 1; i < this.imageProfil.length; i++){
       this.doSetTimeout(i);
    }

  }

  public setProfile(index: number): void{
    setTimeout(() => {
      this.imageOneProfil = this.imageProfil[index];
      console.log(index);
    }, 1000);
  }

  public getImageProfil(): void{
       this.imageService.getImageUrl().subscribe(
        (response) => {
          this.imageProfil = response;
        },
        (error: any) => {console.log(error);
                         this.rout.navigate(['/error/main']) },
        () => console.log("Done!")
       );
  }

  public shuffleImages(): void{

  }

//   public getOneImageProfil(): void{
//     this.imageService.getOneImageUrl().subscribe(
//      (response) => this.imageOneProfil = response,
//      (error: any) => {console.log(error);
//                       this.rout.navigate(['/error/main']) },
//      () => console.log("Done!")
//     );
// }
}
