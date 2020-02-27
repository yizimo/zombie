import { TestBed } from '@angular/core/testing';

import { GetSendDataService } from './get-send-data.service';

describe('GetSendDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSendDataService = TestBed.get(GetSendDataService);
    expect(service).toBeTruthy();
  });
});
