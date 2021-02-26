import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { UserConsentPreferenceComponent } from './containers/user-consent-preference/user-consent-preference.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-consent-preference',
    component: UserConsentPreferenceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-consent-preference'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
