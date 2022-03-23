import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRequisitionFunctionalityService extends BaseService<string>{
    route = 'vwRequisitionFunctionality';
    override orderBy = 'ID';
  }