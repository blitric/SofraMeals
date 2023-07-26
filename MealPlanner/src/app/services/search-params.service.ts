import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {

  private searchInput = new BehaviorSubject<string>("");
  currentSearchInput = this.searchInput.asObservable();

  constructor() { }

   setSearchInput(searchInput: string) {
    this.searchInput.next(searchInput);
  }
}







