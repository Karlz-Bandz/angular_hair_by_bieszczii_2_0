import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../add.description/client';
import { ClientSelect } from '../add.description/clientSelect';
import { Description } from '../add.description/description';
import { GlobService } from '../globalfunctions';
import { PresentationService } from './presentation.service';
import { DeleteDescriptionDto } from './DeleteDescriptionDto';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  clients: ClientSelect[] = [];
  client: Client | undefined;
  user_id: number = 0;
  private deleteDescriptionDto: DeleteDescriptionDto | undefined;

  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  

  

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

  updateText(userId: number, descriptionId: number, description: any): void{
    
    var descriptionString: string = description.value;
    
    var data = {
      "userId": userId,
      "descriptionId": descriptionId, 
      "description": descriptionString
   };

   console.log(data);

   const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem("token")});

   this.http.put(`${this.apiUrl}/api/client/change`, data, {headers}).subscribe(
    () => console.log("Done")
   );
  }

  public getClientDescriptions(presentationForm:{id: number}): void{
    
    this.flagSort = true;
    this.sortButtonVisible = true;
    this.user_id = presentationForm.id;
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

  public deleteDescription(descriptionIdArg: number, userIdArg: number): void{
  // let newId = JSON.stringify({id})
    console.log(descriptionIdArg);
    console.log(userIdArg);

    var userId: number = Number(userIdArg);
    var descriptionId: number = Number(descriptionIdArg);

    var data = {
                  "descriptionId": descriptionId, 
                  "userId": userId
               };

    console.log(data);

    

    
    


    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem("token")});
    
    if(confirm("Czy napewno chcesz usunąć opis klienta " + this.client?.clientName + "? ")){
    this.http.post(this.apiUrl+'/api/client/delete/description', data, {headers}).subscribe(
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
