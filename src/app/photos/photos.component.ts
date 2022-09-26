import { Component, OnInit } from '@angular/core';
import { Photo } from './photos';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photoService: PhotosService) { }

  public photos: Photo[] = [];

  ngOnInit(): void {
    this.getPhotos();
  }

  public getPhotos(): void{
    this.photoService.getImagesNoProfil().subscribe(
      (response: Photo[]) => this.photos = response,
      (error: any) => console.log(error),
      () => console.log("Done!")
    );
  }



}
