import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwDeviationLogService extends BaseService<string>{
    route = 'vwDeviationLog';
    }