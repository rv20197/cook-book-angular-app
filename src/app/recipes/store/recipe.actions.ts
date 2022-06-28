import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = 'Recipes_SetRecipes';
export const FETCH_RECIPES = 'Recipes_FetchRecipes';
export const ADD_RECIPE = 'Recipes_AddRecipe';
export const UPDATE_RECIPE = 'Recipes_UpdateRecipe';
export const DELETE_RECIPE = 'Recipes_DeleteRecipe';
export const SAVE_RECIPE = 'Recipes_SaveRecipe';

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]) {}
}

export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: { index: number; newRecipe: Recipe }) {}
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {}
}

export class SaveRecipe implements Action {
  readonly type = SAVE_RECIPE;
}

export type RecipesActions =
  | SetRecipes
  | FetchRecipes
  | AddRecipe
  | UpdateRecipe
  | DeleteRecipe
  | SaveRecipe;
