import { TestBed } from '@angular/core/testing';

import { RecipeSearchResultsService } from './recipe-search-results.service';

describe('RecipeSearchResultsService', () => {
  let service: RecipeSearchResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeSearchResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
