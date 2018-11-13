import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../recipe-book.model' 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
recipe: Recipe[]=[
  new Recipe('First Recipe', 'It is about pepersoup', 'https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1.jpg'),
  new Recipe('Second Recipe', 'It is about Ewedu and Amala', 'https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1.jpg'),
  new Recipe('Third Recipe', 'It is about Plantain and Fried egg', 'https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1.jpg')
];


  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected=(recipe:Recipe)=>{
this.recipeWasSelected.emit(recipe);
  }
}
