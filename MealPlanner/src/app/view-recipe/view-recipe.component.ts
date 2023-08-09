import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewRecipeService } from '../services/view-recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})

export class ViewRecipeComponent implements OnInit {
 public recipe;
 public id;
 public calories;
 public fat;
 public protein;

  constructor(private route: ActivatedRoute, private viewRecipeService:ViewRecipeService) { }

  ngOnInit(): void {  
    this.id = this.route.snapshot.params['recipeId'];
    this.getRecipe(this.id);
  }
 
  
getRecipe(id) {
  this.viewRecipeService.getRecipe(id).subscribe(
    data => {this.recipe = data; 
      this.calories = this.recipe.nutrition.nutrients.find(function(i) {
      return (i.name == "Calories")}).amount;
      this.fat = this.recipe.nutrition.nutrients.find(function(i) {
        return (i.name == "Fat")}).amount;
        this.protein = this.recipe.nutrition.nutrients.find(function(i) {
          return (i.name == "Protein")}).amount;
    },
    err => console.error(err),
    () => console.log('recipe loaded') 
  );
}

} 
