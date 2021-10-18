import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UrlpComponent } from './urlp/urlp.component';
import { UrlsComponent } from './urls/urls.component';
import { CountComponent } from './count/count.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component'

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"sidebar",
    component:SidebarComponent
  },
  {
    path:"urlp",
    component:UrlpComponent
  },
  {
    path:"urls",
    component:UrlsComponent
  },
  {
    path:"count",
    component:CountComponent
  },
  {
    path:"settings",
    component:SettingsComponent
  },
  {
    path:"info",
    component:InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
