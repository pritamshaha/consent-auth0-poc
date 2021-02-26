import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  template: '',
})
export class LoginComponent {
  constructor(public auth: AuthService) { 
    this.auth.loginWithRedirect()
  }
}
