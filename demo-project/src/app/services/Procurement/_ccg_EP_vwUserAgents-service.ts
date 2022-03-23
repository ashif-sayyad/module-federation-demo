import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwUserAgentsService extends BaseService<string>{
    route = 'vwUserAgents';
    override orderBy = 'ID';
  }