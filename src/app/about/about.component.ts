import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from './image';
import { ImageService } from './image.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   constructor(private imageService: ImageService,
              private rout: Router) { }

  imageProfil: Image | undefined; 

  ngOnInit(): void {
    this.getImageProfil();
  }

  public getImageProfil(): void{
       this.imageService.getImageUrl().subscribe(
        (response) => this.imageProfil = response,
        (error: any) => {console.log(error);
                         this.rout.navigate(['/error/main']) },
        () => console.log("Done!")
       );
  }
}
