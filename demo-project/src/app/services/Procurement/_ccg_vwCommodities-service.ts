import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwCommoditiesService extends BaseService<string>{
    route = 'vwCommodities';
    override orderBy = 'ID';
  }