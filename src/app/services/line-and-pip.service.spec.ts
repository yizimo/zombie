import { TestBed } from '@angular/core/testing';

import { LineAndPipService } from './line-and-pip.service';

describe('LineAndPipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineAndPipService = TestBed.get(LineAndPipService);
    expect(service).toBeTruthy();
  });
});
