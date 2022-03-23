import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblIncidentTypeGroup} from '../../models/munipal-hub/C_ccg_CP_tblIncidentTypeGroup';

@Injectable({
    providedIn: 'root'
  })

export class IncidentTypeGroupService extends BaseService<C_ccg_CP_tblIncidentTypeGroup>{
    route = 'C_ccg_CP_tblIncidentTypeGroup';
    orderBy = 'iIncidentGroupID';
  }