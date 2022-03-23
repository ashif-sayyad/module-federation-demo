import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSupplierCommodityAccessService extends BaseService<string>{
    route = 'vwSupplierCommodityAccess';
    override orderBy = 'ID';
  }