import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSelectedSupplierService extends BaseService<string>{
    route = 'vwSelectedSuppliers';
    override orderBy = 'ID';
  }