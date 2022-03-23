import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
// import {C_ccg_CP_tblPriority} from '../../models/C_ccg_CP_tblPriority';

@Injectable({
    providedIn: 'root'
  })

export class PriorityService extends BaseService<string>{
    route = 'C_ccg_CP_tblPriority';
    override orderBy = 'ID';
  }