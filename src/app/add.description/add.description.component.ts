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
import { GlobService } from '../globalfunctions';

@Component({
  selector: 'app-add.description',
  templateUrl: './add.description.component.html',
  styleUrls: ['./add.description.component.scss']
})
export class AddDescriptionComponent implements OnInit {

  private apiUrl = environment.apiBaseUrl;
 
  clients: ClientSelect[] = [];

  response2: boolean = true;
 
  selected: any;

  constructor(private addDescriptionService: AddDescriptionService,
   private http: HttpClient,
   private rout: Router,
   private glob: GlobService) { }

  
   ngOnInit(): void {
    this.getClients();
    this.glob.secureFront();

  
  }

    hello(descriptionForm: {id: number, descrption: string}): void{
   
    console.log(descriptionForm);
    
    this.response2 = false;

    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem("token")});

    this.http.post(`${this.apiUrl}/api/client/description`, descriptionForm, {headers}).subscribe(
      () => this.rout.navigate(['admin/home']),
      (error: any) => this.rout.navigate(['client/error'])
      
    );

    
  }

  public goBack(): void{
    this.rout.navigate(['admin/home']);
  }

 
  


  public getClients(): void{

     this.addDescriptionService.getClients().subscribe(
         (response: ClientSelect[]) => this.clients = response,
         () => console.log("Done")
     );
  }



  

  



  

}
