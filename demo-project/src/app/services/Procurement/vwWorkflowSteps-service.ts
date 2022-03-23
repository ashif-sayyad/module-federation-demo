import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwWorkflowStepsService extends BaseService<string>{
    route = 'vwWorkflowSteps';
    override orderBy = 'ID';
  }