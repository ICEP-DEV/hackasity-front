import { TestBed } from '@angular/core/testing';

import { SityService } from './sity.service';

describe('SityService', () => {
  let service: SityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
