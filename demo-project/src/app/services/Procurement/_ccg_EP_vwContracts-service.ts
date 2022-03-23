import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwContractsService extends BaseService<string>{
    route = 'vwContracts';
    }