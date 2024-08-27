import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGurdGuard } from './auth-gurd.guard';

describe('authGurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
