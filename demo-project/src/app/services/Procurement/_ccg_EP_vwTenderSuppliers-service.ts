import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTenderSuppliersService extends BaseService<string>{
    route = 'vwTenderSuppliers';
    override orderBy = 'ID';
  }