import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ViewRecipeService {

  queryParams = new HttpParams();

  constructor(private http:HttpClient) { }

getRecipe(recipeId) {
  this.queryParams = this.queryParams.set("id", recipeId);
  return this.http.get('/server/viewrecipe', {params:this.queryParams});
}

}




