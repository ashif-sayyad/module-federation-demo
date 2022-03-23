import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwProcurementMethodsListService extends BaseService<string>{
    route = 'vwProcurementMethodsList';
  }