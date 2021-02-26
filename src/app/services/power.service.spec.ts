import { TestBed } from '@angular/core/testing';

import { PowerService } from './power.service';

describe('PowerService', () => {
  let service: PowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 4', () => {
    let result = service.power(2, 2)
    expect(result).toBe(4);
    expect(typeof result).toBe('number')
  });

});
