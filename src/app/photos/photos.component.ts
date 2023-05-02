import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from './photos';
import { PhotosService } from './photos.service';
import { Animate } from '../animate';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  animations: [Animate]
})
export class PhotosComponent implements OnInit {

  constructor(private photoService: PhotosService,
              private rout: Router) { }

  public photos: Photo[] = [];

  show = false;

  ngOnInit(): void {
    this.getPhotos();
    setTimeout(() => {
      this.show = true;
    }, 100);
  }

  get stateOfImg(){
    return this.show ? 'show' : 'hide';
  }

  public getPhotos(): void{
    this.photoService.getImagesNoProfil().subscribe(
      (response: Photo[]) => this.photos = response,
      (error: any) => {console.log(error);
                        this.rout.navigate(['/error/main'])},
      () => console.log("Done!")
    );
  }



}
