import { TestBed } from '@angular/core/testing';

import { SendDataService } from './send-data.service';

describe('SendDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendDataService = TestBed.get(SendDataService);
    expect(service).toBeTruthy();
  });
});
