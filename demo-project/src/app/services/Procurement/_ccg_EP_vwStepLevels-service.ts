import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwStepLevelsService extends BaseService<string>{
    route = 'vwStepLevels';
  }