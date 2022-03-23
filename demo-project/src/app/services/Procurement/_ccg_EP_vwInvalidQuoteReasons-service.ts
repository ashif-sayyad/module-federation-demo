
import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwInvalidQuoteReasonsService extends BaseService<string>{
    route = 'vwInvalidQuoteReasons';
    override orderBy = 'ID';
  }