import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../../../app/components/recipe-book/recipe-book.model'
import { Ingredient } from '../ingredients.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected= new EventEmitter<Recipe>();
  private recipe: Recipe[] = [
    new Recipe('First Recipe', 'It is about peppersoup', 'https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1.jpg',[new Ingredient('Asun', 1) ,new Ingredient('Pepper', 2)]),
    new Recipe('Second Recipe', 'It is about Ewedu and Amala', 'https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1.jpg', [new Ingredient('Eba', 5) ,new Ingredient('Ewedu', 8)]),
    new Recipe('Third Recipe', 'It is about Plantain and Fried egg', 'https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1.jpg', [new Ingredient('Chicken', 3) ,new Ingredient('Turkey', 1)])
  ];
    

  constructor() { }
 getService(){
   return this.recipe.slice();
 }
   // addRecipe(recipe: Recipe) {
  //   this.recipe.push(recipe)
  // }
}
