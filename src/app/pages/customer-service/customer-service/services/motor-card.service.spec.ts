import { TestBed } from '@angular/core/testing';

import { MotorCardService } from './motor-card.service';

describe('MotorCardService', () => {
  let service: MotorCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
