import { UserConsentPreferenceService } from './service/user-consent-preference.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserConsentPreferenceComponent } from './containers/user-consent-preference/user-consent-preference.component';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserConsentPreferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    AuthModule.forRoot({
      domain: 'poc-zeotap.au.auth0.com',
      clientId: '5cm7gjCL4AOv1kn2FfLEMfQJihMfNjgC',
      response_type: 'token id_token',
      redirectUri: `${window.location.origin}`,
    }),
    BrowserAnimationsModule,
  ],
  providers: [UserConsentPreferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
