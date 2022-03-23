import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblRole} from '../../models/munipal-hub/C_ccg_CP_tblRole';

@Injectable({
    providedIn: 'root'
  })

export class RolesService extends BaseService<C_ccg_CP_tblRole>{
    route = 'C_ccg_CP_tblRole';
    orderBy = 'iRoleID';
  }