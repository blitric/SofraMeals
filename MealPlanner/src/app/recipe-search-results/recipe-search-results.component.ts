import { Component, OnInit } from '@angular/core';
import { SearchParamsService } from '../services/search-params.service';
import { Subscription } from 'rxjs';   

@Component({
  selector: 'app-recipe-search-results',
  templateUrl: './recipe-search-results.component.html',
  styleUrls: ['./recipe-search-results.component.css']
})
export class RecipeSearchResultsComponent implements OnInit {

  searchQueryInput: string;
  subscription: Subscription;

  constructor (private searchParamsService:SearchParamsService) { 
    }
    
  

  ngOnInit(): void {
    this.subscription = this.searchParamsService.currentSearchInput.subscribe(data => this.searchQueryInput = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

