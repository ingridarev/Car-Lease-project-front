import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { busAdminLoginGuard } from './busadmin-login.guard';

describe('busadminLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => busAdminLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
