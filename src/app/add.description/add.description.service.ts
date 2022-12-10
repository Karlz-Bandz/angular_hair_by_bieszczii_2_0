import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientSelect } from './clientSelect';

@Injectable({
  providedIn: 'root'
})
export class AddDescriptionService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiBaseUrl;


  public getClients(): Observable<ClientSelect[]>{
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem("token")});
    return this.http.get<ClientSelect[]>(`${this.apiUrl}/api/client/select`, {headers});
  }

  
}
