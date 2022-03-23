import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSupplierUDFService extends BaseService<string>{
    route = 'vwSupplierUDF';
  }