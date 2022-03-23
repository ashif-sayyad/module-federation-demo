import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblDataSyncTables} from '../../models/munipal-hub/C_ccg_CP_tblDataSyncTables';

@Injectable({
    providedIn: 'root'
  })

export class tblDataSyncTablesService extends BaseService<C_ccg_CP_tblDataSyncTables>{
    route = 'C_ccg_CP_tblDataSyncTables';
    override orderBy = 'ID';
  }