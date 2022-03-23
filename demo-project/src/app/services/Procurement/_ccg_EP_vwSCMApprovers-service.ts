import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSCMApproversService extends BaseService<string>{
    route = 'vwSCMApprovers';
    override orderBy = 'ID';
  }