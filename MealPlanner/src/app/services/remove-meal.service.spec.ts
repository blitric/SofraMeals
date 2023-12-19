import { TestBed } from '@angular/core/testing';

import { RemoveMealService } from './remove-meal.service';

describe('RemoveMealService', () => {
  let service: RemoveMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
