import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];
  recipe_in_progress: Recipe;
  constructor() {
    this.recipe_in_progress = Recipe.createBlank();
    this.recipes = [new Recipe('gulab jabun', 'tasty gulab', 4, 60, null, null, null),
    new Recipe('Biryani', 'Dum Briyani', 5, 45, null, null, null),
    ];
  }
  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
  }


}
