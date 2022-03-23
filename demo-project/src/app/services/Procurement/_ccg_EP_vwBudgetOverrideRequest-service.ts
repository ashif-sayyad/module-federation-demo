import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwBudgetOverrideRequestService extends BaseService<string>{
    route = 'vwBudgetOverrideRequest';
    override orderBy = 'ID';
  }