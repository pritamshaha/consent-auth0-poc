import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'poc-zeotap.au.auth0.com',
      clientId: '5cm7gjCL4AOv1kn2FfLEMfQJihMfNjgC'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
