import { TestBed } from '@angular/core/testing';

import { ViewRecipeService } from './view-recipe.service';

describe('ViewRecipeService', () => {
  let service: ViewRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
