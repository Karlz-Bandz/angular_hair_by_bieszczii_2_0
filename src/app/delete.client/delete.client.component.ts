import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Client } from '../add.description/client';
import { ClientSelect } from '../add.description/clientSelect';
import { GlobService } from '../globalfunctions';
import { DeleteClientService } from './delete.client.service';

@Component({
  selector: 'app-delete.client',
  templateUrl: './delete.client.component.html',
  styleUrls: ['./delete.client.component.scss']
})
export class DeleteClientComponent implements OnInit {

  clients: ClientSelect[] = [];

  constructor(private deleteService: DeleteClientService,
    private http: HttpClient,
    private rout: Router,
    private glob: GlobService) { }

  ngOnInit(): void {
    this.getClients();
    this.glob.secureFront();
  }

  private apiUrl = environment.apiBaseUrl;

  public getClients(): void{

    this.deleteService.getClients().subscribe(
        (response: ClientSelect[]) => this.clients = response,
        () => console.log("Done")
    );
  }

  public deleteClient(deleteForm: {id: number}): void{

    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem("token")});

       if(confirm("Czy na pewno chcesz usunąć klienta?")){
        this.http.post(`${this.apiUrl}/api/client/delete`, deleteForm, {headers}).subscribe(
          () => this.rout.navigate(['/admin/home']));
       }


        
  }

 

}
