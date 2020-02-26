import { TestBed } from '@angular/core/testing';

import { SendDataImplService } from './send-data-impl.service';

describe('SendDataImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendDataImplService = TestBed.get(SendDataImplService);
    expect(service).toBeTruthy();
  });
});
