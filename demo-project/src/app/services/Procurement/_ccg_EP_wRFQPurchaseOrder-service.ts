import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class wRFQPurchaseOrderService extends BaseService<string>{
    route = 'wRFQPurchaseOrder';
    override orderBy = 'ID';
  }