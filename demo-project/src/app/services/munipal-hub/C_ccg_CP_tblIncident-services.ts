import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblIncident} from '../../models/munipal-hub/C_ccg_CP_tblIncident';

@Injectable({
    providedIn: 'root'
  })

export class IncidentService extends BaseService<C_ccg_CP_tblIncident>{
    route = 'C_ccg_CP_tblIncident';
    orderBy = 'iIncidentID';
  }