import { TestBed, inject } from '@angular/core/testing';

import { NailpolishService } from './nailpolish.service';

describe('NailpolishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NailpolishService]
    });
  });

  it('should be created', inject([NailpolishService], (service: NailpolishService) => {
    expect(service).toBeTruthy();
  }));
});
