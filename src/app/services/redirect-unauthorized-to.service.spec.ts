import { TestBed } from '@angular/core/testing';

import { RedirectUnauthorizedToService } from './redirect-unauthorized-to.service';

describe('RedirectUnauthorizedToService', () => {
  let service: RedirectUnauthorizedToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectUnauthorizedToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
