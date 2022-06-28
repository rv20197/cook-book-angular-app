import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as fromAppState from '../../store/app.reducer';
import { map } from 'rxjs/operators';
import * as recipesActions from '../store/recipe.actions';
import * as shoppingListActions from '../../shopping-list/store/shopping-list.actions';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<fromAppState.AppState>
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = +params['id'];
      // this.recipe = this.recipeService.getRecipe(this.index);
      this.store
        .select('recipes')
        .pipe(
          map((recipeState) => {
            return recipeState.recipes.find((recipe, index) => {
              return index === this.index;
            });
          })
        )
        .subscribe((recipe) => {
          this.recipe = recipe;
        });
    });
  }

  onAddtoShoppingList() {
    this.store.dispatch(
      new shoppingListActions.AddIngredients(this.recipe.ingredients)
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.index);
    this.store.dispatch(new recipesActions.DeleteRecipe(this.index));
    this.router.navigate(['/recipes']);
  }
}
