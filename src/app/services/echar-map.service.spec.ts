import { TestBed } from '@angular/core/testing';

import { EcharMapService } from './echar-map.service';

describe('EcharMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcharMapService = TestBed.get(EcharMapService);
    expect(service).toBeTruthy();
  });
});
