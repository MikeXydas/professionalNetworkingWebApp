import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register/register.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterService]
    });
  });

  it('should be created', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
