import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwStepApprovalService extends BaseService<string>{
    route = 'vwStepApproval';
    override orderBy = 'ID';
  }