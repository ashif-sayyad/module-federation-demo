import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTaxTypeService extends BaseService<string>{
    route = 'vwTaxType';
    // orderBy = 'ID';
  }