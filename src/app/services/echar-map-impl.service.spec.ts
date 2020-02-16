import { TestBed } from '@angular/core/testing';

import { EcharMapImplService } from './echar-map-impl.service';

describe('EcharMapImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcharMapImplService = TestBed.get(EcharMapImplService);
    expect(service).toBeTruthy();
  });
});
