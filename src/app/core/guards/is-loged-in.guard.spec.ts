import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLogedInGuard } from './is-loged-in.guard';

describe('isLogedInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLogedInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
