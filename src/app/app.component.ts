import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consent-auth0-poc';
  constructor(public auth: AuthService) {
    this.auth.loginWithRedirect()
  }
}
