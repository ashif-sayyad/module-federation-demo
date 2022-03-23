import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {_ccg_CP_tblDataSyncDefaults} from '../../models/munipal-hub/_ccg_CP_tblDataSyncDefaults';

@Injectable({
    providedIn: 'root'
  })

export class tblDataSyncDefaultsService extends BaseService<_ccg_CP_tblDataSyncDefaults>{
    route = 'C_ccg_CP_tblDataSyncDefaults';
    override orderBy = 'ID';
  }