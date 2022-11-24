import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../add.description/client';
import { ClientSelect } from '../add.description/clientSelect';

@Injectable({
  providedIn: 'root'
})
export class DeleteClientService {

  constructor(private http: HttpClient) { }

 private apiUrl = environment.apiBaseUrl;


  public getClients(): Observable<ClientSelect[]>{
    return this.http.get<ClientSelect[]>(`${this.apiUrl}/api/client/select`);
  }
}
