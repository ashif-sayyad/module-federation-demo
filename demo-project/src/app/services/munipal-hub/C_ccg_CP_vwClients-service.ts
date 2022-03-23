import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwClientsService extends BaseService<string>{
    route = 'C_ccg_CP_vwClient';
    orderBy = 'DCLink';
  }