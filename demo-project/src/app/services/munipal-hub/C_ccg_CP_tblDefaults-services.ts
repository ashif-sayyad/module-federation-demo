import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblDefaults} from '../../models/munipal-hub/C_ccg_CP_tblDefaults';

@Injectable({
    providedIn: 'root'
  })

export class DefaultsService extends BaseService<C_ccg_CP_tblDefaults>{
    route = 'C_ccg_CP_tblDefaults';
    orderBy = 'iDefID';
  }