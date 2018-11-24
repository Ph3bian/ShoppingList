import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 ingredientChanged = new EventEmitter<Ingredient[]>();
 private Ingredient: Ingredient[] =
    [{
      name: 'Tatashe',
      amount: 56
    },
    {
      name: 'Shaki',
      amount: 90
    }
    ]
  constructor() { }
  onIngredientAdded(ingredient: Ingredient) {
    this.Ingredient.push(ingredient)
    this.ingredientChanged.emit(this.Ingredient.slice())
  }
  getIngredients(){
    return this.Ingredient.slice()
  }
}
