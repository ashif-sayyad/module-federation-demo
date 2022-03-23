import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwStepAgentsService extends BaseService<string>{
    route = 'vwStepAgents';
  }