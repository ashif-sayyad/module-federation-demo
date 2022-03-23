import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwBankDetailsService extends BaseService<string>{
    route = 'vwBankDetails';
    // orderBy = 'ID';
  }