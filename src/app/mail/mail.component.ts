import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor(private http: HttpClient,
              private rout: Router) { }

  private apiServer = environment.apiBaseUrl;

  ngOnInit(): void {
  }


  public mailSend(mailData: {senderMail: string, subjectMail: string, bodyMail: string}){
     console.log(mailData);
      this.http.post(`${this.apiServer}/mail/test`, mailData).subscribe(
        
        data => this.rout.navigate(['/success']),
        err => this.rout.navigate(['/error'])

        
        
      );

      

      

  }

}
