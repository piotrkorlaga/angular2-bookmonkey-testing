
import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';

@Injectable()
export class ConfirmCanActivateGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    return confirm('Are you sure you want to open?');
  }

}