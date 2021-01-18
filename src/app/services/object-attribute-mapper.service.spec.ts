import { TestBed } from '@angular/core/testing';

import { ObjectAttributeMapperService } from './object-attribute-mapper.service';

describe('ObjectAttributeMapperService', () => {
  let service: ObjectAttributeMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectAttributeMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
