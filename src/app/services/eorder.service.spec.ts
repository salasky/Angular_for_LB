import { TestBed } from '@angular/core/testing';

import { EOrderService } from './eorder.service';

describe('EOrderService', () => {
  let service: EOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
