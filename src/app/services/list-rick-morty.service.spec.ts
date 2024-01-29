import { TestBed } from '@angular/core/testing';

import { ListRickMortyService } from './list-rick-morty.service';

describe('ListRickMortyService', () => {
  let service: ListRickMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRickMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
