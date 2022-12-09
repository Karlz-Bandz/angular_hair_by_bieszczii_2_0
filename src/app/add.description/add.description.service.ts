import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './client';
import { ClientSelect } from './clientSelect';

@Injectable({
  providedIn: 'root'
})
export class AddDescriptionService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiBaseUrl;


  public getClients(): Observable<ClientSelect[]>{
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem("1")+":"+localStorage.getItem("2"))});
    return this.http.get<ClientSelect[]>(`${this.apiUrl}/api/client/select`, {headers});
  }

  
}
