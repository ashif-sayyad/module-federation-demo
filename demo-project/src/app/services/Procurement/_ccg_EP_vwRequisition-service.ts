import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRequisitionService extends BaseService<string>{
    route = 'vwRequisitions';
    override orderBy = 'ID';
  }