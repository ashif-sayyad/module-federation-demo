import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwProcurementMethodDetailService extends BaseService<string>{
    route = 'vwProcurementMethodDetails';
    override orderBy = 'ID';
  }