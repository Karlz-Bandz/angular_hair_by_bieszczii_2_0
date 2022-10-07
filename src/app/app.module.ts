import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { PhotosComponent } from './photos/photos.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ContactComponent } from './contact/contact.component';
import { MailComponent } from './mail/mail.component';
import { FormsModule } from '@angular/forms';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    PhotosComponent,
    PriceListComponent,
    ContactComponent,
    MailComponent,
    SuccessMessageComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'about', component: AboutComponent},
      {path: 'gallery', component: PhotosComponent},
      {path: 'pricelist', component: PriceListComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'mail', component: MailComponent},
      {path: 'success', component: SuccessMessageComponent},
      {path: 'error', component: ErrorMessageComponent}
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
