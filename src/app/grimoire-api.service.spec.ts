import { TestBed } from '@angular/core/testing';

import { GrimoireApiService } from './grimoire-api.service';

describe('GrimoireApiService', () => {
  let service: GrimoireApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrimoireApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
