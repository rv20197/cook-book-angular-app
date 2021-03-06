import { Action } from '@ngrx/store';
import { ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ShoppingList_ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ShoppingList_ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'ShoppingList_UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'ShoppingList_DELETE_INGREDIENT';
export const START_EDIT = 'ShoppingList_START_EDIT';
export const STOP_EDIT = 'ShoppingList_STOP_EDIT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload:  ingredient ) {}
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit;
