import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwWorkflowService extends BaseService<string>{
    route = 'vwWorkflow';
    override orderBy = 'ID';
  }