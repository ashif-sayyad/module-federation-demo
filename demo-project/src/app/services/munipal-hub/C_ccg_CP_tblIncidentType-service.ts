import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblIncidentType} from '../../models/munipal-hub/C_ccg_CP_tblIncidentType';

@Injectable({
    providedIn: 'root'
  })

export class IncidentTypeService extends BaseService<C_ccg_CP_tblIncidentType>{
    route = 'C_ccg_CP_tblIncidentType';
    override orderBy = 'ID';
  }