import { TestBed } from '@angular/core/testing';

import { AOrderService } from './aorder.service';

describe('AOrderService', () => {
  let service: AOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
