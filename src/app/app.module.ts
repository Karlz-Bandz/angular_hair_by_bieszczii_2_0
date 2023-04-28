import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { PhotosComponent } from './photos/photos.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ContactComponent } from './contact/contact.component';
import { MailComponent } from './mail/mail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ErrorComponent } from './error/error.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { AddClientComponent } from './add.client/add.client.component';
import { AddDescriptionComponent } from './add.description/add.description.component';
import { DeleteClientComponent } from './delete.client/delete.client.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ClientSuccessComponent } from './client.success/client.success.component';
import { ClientErrorComponent } from './client.error/client.error.component';





const routes: Routes = [{path: '', component: MainComponent},
{path: 'about', component: AboutComponent},
{path: 'gallery', component: PhotosComponent},
{path: 'pricelist', component: PriceListComponent},
{path: 'contact', component: ContactComponent},
{path: 'mail', component: MailComponent},
{path: 'success', component: SuccessMessageComponent},
{path: 'error', component: ErrorMessageComponent},
{path: 'error/main', component: ErrorComponent},
{path: 'login', component: LoginComponent},
{path: 'admin/home', component: HomeComponent},
{path: 'add/client', component: AddClientComponent},
{path: 'add/description', component: AddDescriptionComponent},
{path: 'delete/client', component: DeleteClientComponent},
{path: 'presentation', component: PresentationComponent},
{path: 'client/error', component: ClientErrorComponent},
{path: 'client/success', component: ClientSuccessComponent}]



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
    ErrorMessageComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    AddClientComponent,
    AddDescriptionComponent,
    DeleteClientComponent,
    PresentationComponent,
    ClientSuccessComponent,
    ClientErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    
  ],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
