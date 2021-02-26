import { UserConsentPreferenceService, isSuccess, BaseAPIResponse, isError } from './../../service/user-consent-preference.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map, tap, pluck, share, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-consent-preference',
  templateUrl: './user-consent-preference.component.html',
  styleUrls: ['./user-consent-preference.component.scss']
})
export class UserConsentPreferenceComponent implements OnInit {
  showConsentPreference$ = new BehaviorSubject<boolean>(false);
  displayedColumns: string[] = ['regulation', 'purpose', 'value', 'ttl', 'updatedTs'];
  searchResult$: Observable<any>;
  consentPreferenceForm = new FormGroup({
    firstPartyId: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });
  userDetails$: Observable<{ name: string }>;
  error$: Observable<string>;

  constructor(public auth: AuthService, private userConsentPreferenceService: UserConsentPreferenceService) { }

  ngOnInit() {
    this.userDetails$ = this.auth.user$.pipe(
      map((res) => ({ name: res.name })),
      tap(() => this.showConsentPreference$.next(true))
    )

  }

  onSubmit(): void {
    this.consentPreferenceForm.reset();
    const searchResponse$ = this.auth.idTokenClaims$.pipe(pluck('__raw')).pipe(
      switchMap((token: string) => this.userConsentPreferenceService.search(this.consentPreferenceForm, this.consentPreferenceForm.value)),
      share()
    )
    this.searchResult$ = searchResponse$.pipe(
      filter((res) => isSuccess(res.status)),
      map((res: BaseAPIResponse) => res.data)
    );
    this.error$ = searchResponse$.pipe(
      filter((res) => isError(res.status)),
      map((res: BaseAPIResponse) => res.error)
    );
  }
}
