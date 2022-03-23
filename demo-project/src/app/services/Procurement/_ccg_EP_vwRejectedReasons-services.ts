import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRejectedRequisitionsService extends BaseService<string>{
    route = 'vwRejectedRequisitions';
  }