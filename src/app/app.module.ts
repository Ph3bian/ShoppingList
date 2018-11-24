import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterDirectiveDirective } from './better-directive/better-directive.directive';
import { UnlessDirective } from './shared/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shared/services/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
     RecipeItemComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterDirectiveDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
   
  ],
  providers:[ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
