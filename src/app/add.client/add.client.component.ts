import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add.client',
  templateUrl: './add.client.component.html',
  styleUrls: ['./add.client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private http: HttpClient,
    private rout: Router) { }

  apiUrl = environment.apiBaseUrl;

  ngOnInit(): void {
  }


  public addNewClient(clientForm: {clientName: string, clientSurname: string, phoneNumber: string}): void{

    console.log(clientForm);

    this.http.post(this.apiUrl+'/api/client/add', clientForm).subscribe(
      () => this.rout.navigate(['admin/home'])
    );

  }

}
