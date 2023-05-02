import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Slide } from '../slideup';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  animations: [Slide]
})
export class MailComponent implements OnInit {

  constructor(private http: HttpClient,
              private rout: Router) { }

  private apiServer = environment.apiBaseUrl;

  show = false;

  // toggleShowDiv(divName: string) {
  //   if (divName === 'divA') {
  //     console.log(this.animationState);
  //     this.animationState = this.animationState === 'out' ? 'in' : 'out';
  //     console.log(this.animationState);
  //   }
  // }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 100);
  }

  get stateOfImg(){
    return this.show ? 'show' : 'hide';
  }

  public responseBool: boolean = true;
  public response2: boolean = true;


  public mailSend(mailData: {senderMail: string, subjectMail: string, bodyMail: string, recaptchaResponse: string}): void{
     console.log(mailData);
     if(mailData.recaptchaResponse === ''){
     // this.rout.navigate(['/error'])
     this.responseBool = false;
     
     console.log("Error");
     }else{

      this.response2 = false;
      this.http.post(`${this.apiServer}/mail/test`, mailData).subscribe(
        
        data => this.rout.navigate(['/success']),
        err => this.rout.navigate(['/error'])

      
        
      );
    }

 }
 

}
