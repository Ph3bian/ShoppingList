import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Recipe } from '../recipe-book.model';
 import {LoggingService} from '../../../shared/services/logging.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers:[LoggingService]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  show: boolean = false;
  constructor(private loggingService:LoggingService) { }

  ngOnInit() {
  }
  dropdownToggle(hello:string) {
    this.show = !this.show
    // const service= new LoggingService();
  this.loggingService.logStatusChange(hello)
  }
}
