import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientSelect } from '../add.description/clientSelect';
import { PresentationService } from './presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  clients: ClientSelect[] = [];

  constructor(private http: HttpClient,
    private presentationService: PresentationService) { }

  private apiUrl = environment.apiBaseUrl;

  

  ngOnInit(): void {
    this.getSelectClients();
  }

  public getSelectClients(): void{
    this.presentationService.getClients().subscribe(
      (response: ClientSelect[]) => this.clients = response 
    );
  }





}
