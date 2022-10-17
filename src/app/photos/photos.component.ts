import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from './photos';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photoService: PhotosService,
              private rout: Router) { }

  public photos: Photo[] = [];

  ngOnInit(): void {
    this.getPhotos();
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
