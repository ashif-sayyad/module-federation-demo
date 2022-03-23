import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSalesRepService extends BaseService<string>{
    route = 'C_ccg_CP_vwSalesRep';
    orderBy = 'idSalesRep';
  }