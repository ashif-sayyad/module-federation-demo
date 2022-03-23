import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTenderReasonsService extends BaseService<string>{
    route = 'vwTenderReasons';
    override orderBy = 'ID';
  }