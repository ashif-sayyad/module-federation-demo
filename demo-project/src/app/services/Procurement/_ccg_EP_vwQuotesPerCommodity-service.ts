import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwQuotesPerCommodityService extends BaseService<string>{
    route = 'vwQuotesPerCommodity';
    override orderBy = 'ID';
  }