import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from './photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  

  public getImagesNoProfil(): Observable<Photo[]>{
     return this.http.get<Photo[]>(`${this.apiServerUrl}/image/noprofil`);
  }


}
