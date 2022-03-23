import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwDeviationReasonsService extends BaseService<string>{
    route = 'vwDeviationReasons';
    override orderBy = 'ID';
  }