import { TestBed } from '@angular/core/testing';

import { CandidatserviceService } from './candidatservice.service';

describe('CandidatserviceService', () => {
  let service: CandidatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
