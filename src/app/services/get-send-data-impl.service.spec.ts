import { TestBed } from '@angular/core/testing';

import { GetSendDataImplService } from './get-send-data-impl.service';

describe('GetSendDataImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSendDataImplService = TestBed.get(GetSendDataImplService);
    expect(service).toBeTruthy();
  });
});
