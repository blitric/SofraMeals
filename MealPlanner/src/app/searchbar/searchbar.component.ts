import { Component, OnInit } from '@angular/core';
import { RecipeSearchResultsService } from '../services/recipe-search-results.service';                         

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  searchQueryInput: string;
   
  constructor(private recipeSearchResultsService: RecipeSearchResultsService ) { }

  ngOnInit(): void { 

  }

  onSubmit() {
    this.recipeSearchResultsService.setSearchInput(this.searchQueryInput);
  }

}


