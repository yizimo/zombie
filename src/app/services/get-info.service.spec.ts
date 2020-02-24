import { TestBed } from '@angular/core/testing';

import { GetInfoService } from './get-info.service';

describe('GetInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetInfoService = TestBed.get(GetInfoService);
    expect(service).toBeTruthy();
  });
});
