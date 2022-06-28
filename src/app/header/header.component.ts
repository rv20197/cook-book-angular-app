import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import * as authActions from '../auth/store/auth.actions';
import * as recipesActions from '../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }
  saveRecipes() {
    // this.dataStorageService.storeRecipes();
    this.store.dispatch(new recipesActions.SaveRecipe());
  }

  getRecipes() {
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new recipesActions.FetchRecipes());
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
