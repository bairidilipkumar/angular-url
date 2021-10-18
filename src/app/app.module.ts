import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UrlpComponent } from './urlp/urlp.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule}from '@angular/forms';
import { UrlsComponent } from './urls/urls.component';
import { CountComponent } from './count/count.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    UrlpComponent,
    UrlsComponent,
    CountComponent,
    SettingsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
