import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwPendingRequisitionsService extends BaseService<string>{
    route = 'vwPendingRequisitions';
    override orderBy = 'ID';
  }