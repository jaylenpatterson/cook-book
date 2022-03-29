import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Test recipe 2x', 'This is yet another text :3', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg', [new Ingredient('lettuce', 1), new Ingredient('breadaz', 20)])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}