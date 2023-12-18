import { TestBed } from '@angular/core/testing';

import { MymealsService } from './mymeals.service';

describe('MymealsService', () => {
  let service: MymealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MymealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
