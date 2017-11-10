import { TestBed, inject } from '@angular/core/testing';

import { MainFoodService } from './mainFood.service';

describe('MainFoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainFoodService]
    });
  });

  it('should be created', inject([MainFoodService], (service: MainFoodService) => {
    expect(service).toBeTruthy();
  }));
});
