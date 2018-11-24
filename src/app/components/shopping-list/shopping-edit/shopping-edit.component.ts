import { Component, OnInit, ElementRef, ViewChild, EventEmitter,Output  } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef:ElementRef;
 @ViewChild('amountInput') amountInputRef:ElementRef
  ingredients:Ingredient
  // @Output() ingredientAdded= new EventEmitter<Ingredient>();
  constructor(private shoppingListService:ShoppingListService)  { }

  ngOnInit() {
  }
  AddIngredient(){
    const newIngredient= new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value)
    // this.ingredientAdded.emit(newIngredient)
    this.shoppingListService.onIngredientAdded(newIngredient)
  }
}
