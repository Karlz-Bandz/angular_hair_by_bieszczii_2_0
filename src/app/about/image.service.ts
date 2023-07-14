import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from './image';



@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getImageUrl(): Observable<Image[]>{

    return this.http.get<Image[]>(`${this.apiServerUrl}/image/profile`);

  }

  public getOneImageUrl(): Observable<Image>{

    return this.http.get<Image>(`${this.apiServerUrl}/image/0`);

  }
}
