import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_vwTrCodes} from '../../models/munipal-hub/C_ccg_CP_vwTrCodes';
@Injectable({
    providedIn: 'root'
  })

export class vwTrCodesService extends BaseService<C_ccg_CP_vwTrCodes>{
    route = 'C_ccg_CP_vwTrCodes';
    orderBy = 'idTrCodes';
  }