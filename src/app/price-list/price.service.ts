import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Price } from './price';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  public getPrices(): Observable<Price[]>{
    return this.http.get<Price[]>(`${this.apiServerUrl}/work/all`);
  }
}
