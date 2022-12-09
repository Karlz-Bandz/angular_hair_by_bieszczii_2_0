import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddDescriptionService } from './add.description.service';
import { Client } from './client';
import { Description } from './description';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientSelect } from './clientSelect';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.description',
  templateUrl: './add.description.component.html',
  styleUrls: ['./add.description.component.scss']
})
export class AddDescriptionComponent implements OnInit {

  clients: ClientSelect[] = [];
  //client: Client | undefined;

  response2: boolean = true;
 
  //descriptionText: string | undefined;

  selected: any;

 
 private apiUrl = environment.apiBaseUrl;
  

  constructor(private addDescriptionService: AddDescriptionService,
   private http: HttpClient,
   private rout: Router) { }

  ngOnInit(): void {
    this.getClients();
  }

 

  hello(descriptionForm: {id: number, descrption: string}): void{
   
    console.log(descriptionForm);
    
    this.response2 = false;

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem("1")+":"+localStorage.getItem("2"))});

    this.http.post(`${this.apiUrl}/api/client/description`, descriptionForm, {headers}).subscribe(
      () => this.rout.navigate(['admin/home']),
      (error: any) => this.rout.navigate(['client/error'])
      
    );

    
  }

 
  


  public getClients(): void{

     this.addDescriptionService.getClients().subscribe(
         (response: ClientSelect[]) => this.clients = response,
         () => console.log("Done")
     );
  }



  

  



  

}
