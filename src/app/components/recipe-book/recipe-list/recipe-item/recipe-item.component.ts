import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../../recipe-book.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Output()  recipeSelected= new EventEmitter<void>();
@Input() recipe:Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  
  }
onSelected=()=>{
// this.recipeSelected.emit();
this.recipeService.recipeSelected.emit(this.recipe)
}
}
