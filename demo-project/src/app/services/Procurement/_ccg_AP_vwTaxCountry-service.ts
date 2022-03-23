import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTaxCountryService extends BaseService<string>{
    route = 'vwTaxCountry';
    // orderBy = 'ID';
  }