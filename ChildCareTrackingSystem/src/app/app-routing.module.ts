import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { RegistrationComponent } from './components/security/registration/registration.component'
import { DashboardComponent } from './components/area/dashboard/dashboard.component';
import { ProfileComponent } from './components/area/profile/profile.component';
import { ImmunizationComponent } from './components/area/immunization/immunization.component';
import { BioinfoComponent } from './components/area/bioinfo/bioinfo.component';
import { AdimnComponent } from './components/area/adimn/adimn.component';
import {LoginComponent} from './components/security/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'immunization', component: ImmunizationComponent },
  { path: 'bioinfo', component: BioinfoComponent },
  { path: 'adimn', component: AdimnComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
