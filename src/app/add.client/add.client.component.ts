import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GlobService } from '../globalfunctions';

@Component({
  selector: 'app-add.client',
  templateUrl: './add.client.component.html',
  styleUrls: ['./add.client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private http: HttpClient,
    private rout: Router,
    private glob: GlobService) { }

  apiUrl = environment.apiBaseUrl;
  response2: boolean = true;

  ngOnInit(): void {
    this.glob.secureFront();
  }

 


  public addNewClient(clientForm: {clientName: string, clientSurname: string, phoneNumber: string}): void{
   
    console.log(clientForm);

    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem("token")});

    this.response2 = false;

    this.http.post(this.apiUrl+'/api/client/add', clientForm, {headers}).subscribe(
      () => this.rout.navigate(['client/success']),
      (error: any) => this.rout.navigate(['client/error'])
    );

  }

  public goBack(): void{
    this.rout.navigate(['admin/home']);
  }

}
