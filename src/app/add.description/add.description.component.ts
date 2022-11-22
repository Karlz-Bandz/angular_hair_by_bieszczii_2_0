import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddDescriptionService } from './add.description.service';
import { Client } from './client';

@Component({
  selector: 'app-add.description',
  templateUrl: './add.description.component.html',
  styleUrls: ['./add.description.component.scss']
})
export class AddDescriptionComponent implements OnInit {

  clients: Client[] = [];
  client: Client | undefined;
  

  constructor(private addDescriptionService: AddDescriptionService) { }

  ngOnInit(): void {
    this.getClients();
  }

  


  public getClients(): void{

     this.addDescriptionService.getClients().subscribe(
         (response: Client[]) => this.clients = response,
         () => console.log("Done")
     );
  }

  public changeStatus(ngForm: NgForm): void{
    this.client = ngForm.value;

    console.log(this.client);
  }

  



  

}
