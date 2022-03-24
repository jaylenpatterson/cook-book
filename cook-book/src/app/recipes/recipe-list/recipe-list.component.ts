import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg'),
    new Recipe('Test recipe 2x', 'This is yet another text :3', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
