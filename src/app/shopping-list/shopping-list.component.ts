import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { StartEdit } from './store/shopping-list.actions';
import * as fromAppReducer from '../store/app.reducer'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: ingredient[] }>;
  constructor(
    private store: Store<fromAppReducer.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingList.getIngredients();
    // this.subscription = this.shoppingList.ingredientsChanged.subscribe(
    //   (ingredients: ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    // this.shoppingList.startedEditing.next(index);
    this.store.dispatch(new StartEdit(index))
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
