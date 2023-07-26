import { Component, OnInit } from '@angular/core';
import { SearchParamsService } from '../services/search-params.service';
import { Subscription } from 'rxjs';                             

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchQueryInput: string;
  subscription: Subscription;
  
  constructor(private searchParamsService: SearchParamsService ) { }

  ngOnInit(): void {
    this.subscription = this.searchParamsService.currentSearchInput.subscribe(data => this.searchQueryInput = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

  onSubmit() {
    this.searchParamsService.setSearchInput(this.searchQueryInput);
  }

}


