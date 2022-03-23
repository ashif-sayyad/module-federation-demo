import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTaxRateService extends BaseService<string>{
    route = 'vwTaxRate';
    override orderBy = 'ID';
  }