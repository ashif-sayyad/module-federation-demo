import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwCommodityAccessService extends BaseService<string>{
    route = 'vwCommodityAccess';
    override orderBy = 'ID';
  }