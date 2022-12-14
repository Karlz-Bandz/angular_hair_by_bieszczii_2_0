import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../add.description/client';
import { ClientSelect } from '../add.description/clientSelect';
import { Description } from '../add.description/description';
import { GlobService } from '../globalfunctions';
import { PresentationService } from './presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  clients: ClientSelect[] = [];
  client: Client | undefined;

  

  showSort: boolean = true;
  sortButtonVisible: boolean = true;

  constructor(private http: HttpClient,
    private presentationService: PresentationService,
    private rout: Router,
    private glob: GlobService) { }

  private apiUrl = environment.apiBaseUrl;

  

  ngOnInit(): void {
    this.getSelectClients();
    this.glob.secureFront();
    
  }

  public getSelectClients(): void{
    this.presentationService.getClients().subscribe(
      (response: ClientSelect[]) => this.clients = response 
    );
  }

  public getClientDescriptions(presentationForm:{id: number}): void{
    
    this.flagSort = true;
    this.sortButtonVisible = true;
    this.presentationService.getClientDescriptions(presentationForm.id).subscribe(
      (response: Client) => this.client = response
    );
  }
  


  flagSort: boolean = true;

  public sortReverse(): void{
   
    
    
    if(this.flagSort === true){
    this.client?.descriptions.reverse();
    this.flagSort = false;
    this.sortButtonVisible = false;
   }


   
  }
  public sortNormal(): void{
    if(this.flagSort === false){
      this.client?.descriptions.reverse();
      this.flagSort = true;
      this.sortButtonVisible = true;
     }
  }

  public comeBack(): void{
    this.rout.navigate(['admin/home']);
  }

  public deleteDescription(id: number): void{
  // let newId = JSON.stringify({id})
    console.log(id);


    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem("token")});
    
    if(confirm("Czy napewno chcesz usun???? opis klienta " + this.client?.clientName + "? ")){
    this.http.get(this.apiUrl+'/api/client/delete/description/'+id, {headers}).subscribe(
      () => console.log("Done"),
      (error: any) => this.rout.navigate(['client/error'])
    );
    }

    // this.presentationService.getClientDescriptions(this.clientId).subscribe(
    //   (response: Client) => this.client = response
    // );
}

// reloadComponent() {
//   this.rout.routeReuseStrategy.shouldReuseRoute = () => false;
//   this.rout.onSameUrlNavigation = 'reload';
//   this.rout.navigate(['/presentation']);
// }





}
