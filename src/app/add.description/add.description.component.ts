import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddDescriptionService } from './add.description.service';
import { Client } from './client';
import { Description } from './description';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add.description',
  templateUrl: './add.description.component.html',
  styleUrls: ['./add.description.component.scss']
})
export class AddDescriptionComponent implements OnInit {

  clients: Client[] = [];
  client: Client | undefined;
 
  descriptionText: string | undefined;

  selected: any;

 
 private apiUrl = environment.apiBaseUrl;
  

  constructor(private addDescriptionService: AddDescriptionService,
   private http: HttpClient ) { }

  ngOnInit(): void {
    this.getClients();
  }

 

  hello(mailForm: {id: number, descrption: string}): void{
   
    console.log(mailForm);
    

    this.http.post(`${this.apiUrl}/api/client/description`, mailForm).subscribe(
      () => console.log("Done:)")
    );

    
  }

 
  


  public getClients(): void{

     this.addDescriptionService.getClients().subscribe(
         (response: Client[]) => this.clients = response,
         () => console.log("Done")
     );
  }



  

  



  

}
