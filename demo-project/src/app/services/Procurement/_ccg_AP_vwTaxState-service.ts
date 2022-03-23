import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTaxStateService extends BaseService<string>{
    route = 'vwTaxState';
    // orderBy = 'ID';
  }