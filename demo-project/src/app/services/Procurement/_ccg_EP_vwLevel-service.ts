import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwLevelsService extends BaseService<string>{
    route = 'vwLevels';
  }