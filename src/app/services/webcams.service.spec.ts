import { TestBed } from '@angular/core/testing';

import { WebcamsService } from './webcams.service';

describe('WebcamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebcamsService = TestBed.get(WebcamsService);
    expect(service).toBeTruthy();
  });
});
