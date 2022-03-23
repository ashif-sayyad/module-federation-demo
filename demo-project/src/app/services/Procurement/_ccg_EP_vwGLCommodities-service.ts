import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwGLCommoditiesService extends BaseService<string>{
    route = 'vwGLCommodities';
    override orderBy = 'ID';
  }