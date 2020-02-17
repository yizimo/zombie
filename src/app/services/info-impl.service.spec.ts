import { TestBed } from '@angular/core/testing';

import { InfoImplService } from './info-impl.service';

describe('InfoImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoImplService = TestBed.get(InfoImplService);
    expect(service).toBeTruthy();
  });
});
