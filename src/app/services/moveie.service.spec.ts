import { TestBed } from '@angular/core/testing';

import { MoveieService } from './moveie.service';

describe('MoveieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveieService = TestBed.get(MoveieService);
    expect(service).toBeTruthy();
  });
});
