import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { RegistrationComponent } from './components/security/registration/registration.component';
import { DashboardComponent } from './components/area/dashboard/dashboard.component';
import { ProfileComponent } from './components/area/profile/profile.component';
import { ImmunizationComponent } from './components/area/immunization/immunization.component';
import { BioinfoComponent } from './components/area/bioinfo/bioinfo.component';
import { AdimnComponent } from './components/area/adimn/adimn.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegistrationComponent,
    DashboardComponent,
    ProfileComponent,
    ImmunizationComponent,
    BioinfoComponent,
    AdimnComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
