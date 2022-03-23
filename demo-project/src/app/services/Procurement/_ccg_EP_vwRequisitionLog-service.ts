import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRequisitionLogService extends BaseService<string>{
    route = 'vwRequisitionLog';
    override orderBy = 'ID';
  }