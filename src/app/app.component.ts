import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consent-auth0-poc';
  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) {
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
