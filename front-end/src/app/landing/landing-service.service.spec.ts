import { TestBed, inject } from '@angular/core/testing';

import { LandingServiceService } from './landing-service.service';

describe('LandingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandingServiceService]
    });
  });

  it('should be created', inject([LandingServiceService], (service: LandingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
