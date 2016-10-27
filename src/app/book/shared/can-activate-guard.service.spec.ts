/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConfirmCanActivateGuardService } from './can-activate-guard.service';

describe('Service: ConfirmCandeactivateGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmCanActivateGuardService]
    });
  });

  it('should be defined', inject([ConfirmCanActivateGuardService], (service: ConfirmCanActivateGuardService) => {
    expect(service).toBeTruthy();
  }));

  it('should be return true', inject([ConfirmCanActivateGuardService], (service: ConfirmCanActivateGuardService) => {
    spyOn(window, 'confirm').and.returnValue(true);

    expect(service.canActivate()).toBe(true);
  }));

  it('should be return false', inject([ConfirmCanActivateGuardService], (service: ConfirmCanActivateGuardService) => {
    spyOn(window, 'confirm').and.returnValue(false);

    expect(service.canActivate()).toBe(false);
  }));
});