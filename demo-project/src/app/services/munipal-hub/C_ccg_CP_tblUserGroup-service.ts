import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblUserGroup} from '../../models/munipal-hub/C_ccg_CP_tblUserGroup';

@Injectable({
    providedIn: 'root'
  })

export class UserGroupService extends BaseService<C_ccg_CP_tblUserGroup>{
    route = 'C_ccg_CP_tblUserGroup';
    orderBy = 'iUserGroupID';
  }