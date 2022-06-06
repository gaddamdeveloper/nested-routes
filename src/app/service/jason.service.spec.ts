import { TestBed } from '@angular/core/testing';

import { JasonService } from './jason.service';

describe('JasonService', () => {
  let service: JasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
