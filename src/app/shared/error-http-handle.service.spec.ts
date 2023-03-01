import { TestBed } from '@angular/core/testing';

import { ErrorHttpHandleService } from './error-http-handle.service';

describe('ErrorHttpHandleService', () => {
  let service: ErrorHttpHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHttpHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
