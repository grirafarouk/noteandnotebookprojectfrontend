import { TestBed } from '@angular/core/testing';

import { ApidserviiceService } from './apidserviice.service';

describe('ApidserviiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApidserviiceService = TestBed.get(ApidserviiceService);
    expect(service).toBeTruthy();
  });
});
