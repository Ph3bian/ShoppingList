import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-book.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers:[RecipeService]
})
export class RecipeBookComponent implements OnInit {
selectedRecipe: Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipe=recipe;
    })
  }

}
