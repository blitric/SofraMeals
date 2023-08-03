import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeSearchResultsService {

  queryParams = new HttpParams();
  private searchInput;

  constructor(private http:HttpClient) { }

  setSearchInput(searchInput:string) {
    this.searchInput = searchInput;  
  }

    getRecipes() {
      this.queryParams = this.queryParams.set("ingredients", this.searchInput);
      return this.http.get('/server/recipes', {params:this.queryParams});
    }
  }


