import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblUser} from '../../models/munipal-hub/C_ccg_CP_tblUser';

@Injectable({
    providedIn: 'root'
  })

export class UserService extends BaseService<C_ccg_CP_tblUser>{
    route = 'C_ccg_CP_tblUser';
    orderBy = 'iUserID';
  }