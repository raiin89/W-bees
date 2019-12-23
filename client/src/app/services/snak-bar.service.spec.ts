import { TestBed } from '@angular/core/testing';

import { SnakBarService } from './snak-bar.service';

describe('SnakBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnakBarService = TestBed.get(SnakBarService);
    expect(service).toBeTruthy();
  });
});
