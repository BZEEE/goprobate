import { TestBed } from '@angular/core/testing';

import { RedirectLoggedInToService } from './redirect-logged-in-to.service';

describe('RedirectLoggedInToService', () => {
  let service: RedirectLoggedInToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectLoggedInToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
