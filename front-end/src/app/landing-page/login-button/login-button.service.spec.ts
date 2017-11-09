import { TestBed, inject } from '@angular/core/testing';

import { LoginButtonService } from './login-button.service';

describe('LoginButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginButtonService]
    });
  });

  it('should be created', inject([LoginButtonService], (service: LoginButtonService) => {
    expect(service).toBeTruthy();
  }));
});
