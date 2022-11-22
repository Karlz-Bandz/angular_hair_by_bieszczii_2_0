import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class AddDescriptionService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiBaseUrl;


  public getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}/api/client/show/all`);
  }

  
}
