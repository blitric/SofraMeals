import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { ExtapiComponent } from './extapi/extapi.component';
import { RecipeSearchResultsComponent } from './recipe-search-results/recipe-search-results.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

const routes: Routes = [
  { path: 'home' , component : HomeComponent},
  { path: 'foods' , component : FoodComponent},
  { path: 'extapi' , component : ExtapiComponent},
  { path: 'recipes' , component : RecipeSearchResultsComponent},
  { path: 'viewrecipe/:recipeId', component: ViewRecipeComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {} 
