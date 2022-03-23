import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwPriorityService extends BaseService<string>{
    route = 'vwPriority';
    override orderBy = 'ID';
  }