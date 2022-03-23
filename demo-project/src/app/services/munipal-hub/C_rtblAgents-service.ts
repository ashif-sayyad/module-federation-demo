import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class AgentService extends BaseService<string>{
    route = 'C_rtblAgents';
    orderBy = 'idAgents';
  }