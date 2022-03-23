
import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class _ccg_CP_vwDataSyncHeaderService extends BaseService<string>{
    route = 'C_ccg_CP_vwDataSyncHeader';
    override orderBy = 'ID';
  }