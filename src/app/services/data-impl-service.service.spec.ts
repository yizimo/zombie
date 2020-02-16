import { TestBed } from '@angular/core/testing';

import { DataImplServiceService } from './data-impl-service.service';

describe('DataImplServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataImplServiceService = TestBed.get(DataImplServiceService);
    expect(service).toBeTruthy();
  });
});
