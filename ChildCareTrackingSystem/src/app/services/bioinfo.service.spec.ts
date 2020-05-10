import { TestBed } from '@angular/core/testing';

import { BioinfoService } from './bioinfo.service';

describe('BioinfoService', () => {
  let service: BioinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
