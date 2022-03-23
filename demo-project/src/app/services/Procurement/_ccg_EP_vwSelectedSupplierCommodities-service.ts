import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSelectedSupplierCommoditiesService extends BaseService<string>{
    route = 'vwSelectedSupplierCommodities';
    override orderBy = 'ID';
  }