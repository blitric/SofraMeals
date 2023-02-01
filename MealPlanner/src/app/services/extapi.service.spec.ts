import { TestBed } from '@angular/core/testing';

import { ExtapiService } from './extapi.service';

describe('ExtapiService', () => {
  let service: ExtapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
