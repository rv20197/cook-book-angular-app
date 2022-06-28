import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as fromAuthActions from '../app/auth/store/auth.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    @Inject(PLATFORM_ID) private platformId,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new fromAuthActions.AutoLogin());
      this.router.navigate(['/recipes']);
      console.log('Auto Login');
    }
    console.log('Hello Users!');

    // this.authService.autoLogin();
  }
}
