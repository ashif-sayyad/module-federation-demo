import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRequisitionFunctionalityOptionsService extends BaseService<string>{
    route = 'vwRequisitionFunctionalityOptions';
    override orderBy = 'ID';
  }