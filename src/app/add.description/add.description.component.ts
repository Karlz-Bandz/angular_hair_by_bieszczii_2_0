import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddDescriptionService } from './add.description.service';
import { ClientSelect } from './clientSelect';
import { Router } from '@angular/router';
import { GlobService } from '../globalfunctions';
import { Animate } from '../animate';

@Component({
  selector: 'app-add.description',
  templateUrl: './add.description.component.html',
  styleUrls: ['./add.description.component.scss'],
  animations: [Animate]
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
    setTimeout(() => {
      this.show = true;
    }, 100);

  
  }

  show = false;
  
  get stateOfImg(){
    return this.show ? 'show' : 'hide';
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
