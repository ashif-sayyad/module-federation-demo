import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSuppliersService extends BaseService<string>{
    route = 'vwSupplier';
    override orderBy = 'cAccount';
  }