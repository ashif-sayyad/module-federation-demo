import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSettlementTermsService extends BaseService<string>{
    route = 'vwSettlementTerms';
    // orderBy = 'ID';
  }