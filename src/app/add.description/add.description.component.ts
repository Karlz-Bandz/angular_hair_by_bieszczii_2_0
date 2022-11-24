import { HttpClient } from '@angular/common/http';
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
  client: Client | undefined;
 
  descriptionText: string | undefined;

  selected: any;

 
 private apiUrl = environment.apiBaseUrl;
  

  constructor(private addDescriptionService: AddDescriptionService,
   private http: HttpClient,
   private rout: Router) { }

  ngOnInit(): void {
    this.getClients();
  }

 

  hello(mailForm: {id: number, descrption: string}): void{
   
    console.log(mailForm);
    

    this.http.post(`${this.apiUrl}/api/client/description`, mailForm).subscribe(
      () => this.rout.navigate(['admin/home'])
    );

    
  }

 
  


  public getClients(): void{

     this.addDescriptionService.getClients().subscribe(
         (response: ClientSelect[]) => this.clients = response,
         () => console.log("Done")
     );
  }



  

  



  

}
