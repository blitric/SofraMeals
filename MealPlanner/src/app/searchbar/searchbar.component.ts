import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeSearchResultsService } from '../services/recipe-search-results.service';
                     
@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  searchQueryInput: string;
 
  constructor(private recipeSearchResultsService: RecipeSearchResultsService, private router: Router ) { }

  ngOnInit(): void { 
   
  }

  onSubmit() {

    this.searchQueryInput = this.searchQueryInput.split(' ').map(function(elem) {
      return elem + ",";
    }).join("");
    this.recipeSearchResultsService.setSearchInput(this.searchQueryInput);

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    /*this.router.navigateByUrl('/recipes');*/
    this.router.navigate(['/recipes']);

  }  

}


