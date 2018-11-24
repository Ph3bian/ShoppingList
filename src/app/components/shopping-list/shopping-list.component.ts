import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model'
import {ShoppingListService} from '../../shared/services/shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

  
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= []
// ingredients: Ingredient[]= [
//   new Ingredient('Tatashe', 56),
//   new Ingredient('Shaki', 90)
// ]
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients
    })
//     this.shoppingListService.onIngredientAdded.subscribe(
//       (ingredient:Ingredient)=>{
// this.ingredients=ingredient
//       }
//     )
  }
 
}
