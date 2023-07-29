import { Component, OnInit } from '@angular/core';
import { RecipeSearchResultsService } from '../services/recipe-search-results.service';   

@Component({
  selector: 'app-recipe-search-results',
  templateUrl: './recipe-search-results.component.html',
  styleUrls: ['./recipe-search-results.component.css']
})

export class RecipeSearchResultsComponent implements OnInit {
 
  public recipes;

  constructor (private recipeSearchResultsService: RecipeSearchResultsService ) { 
    }
    
  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeSearchResultsService.getRecipes().subscribe(
      data => {this.recipes = data},
      err => console.error(err),
      () => console.log('recipes loaded') 
    );
  }

}

