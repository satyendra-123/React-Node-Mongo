import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TopnavbarComponent } from './components/common/topnavbar/topnavbar.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from "angular5-social-login";

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

 
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("194087484713884")
        }
      ]
  );
  return config;
}