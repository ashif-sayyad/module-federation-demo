import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwProcurementPlanService extends BaseService<string>{
    route = 'vwProcurementPlan';
    override orderBy = 'ID';
  }