import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class DocTypeService extends BaseService<string>{
    route = 'C_ccg_IM_tblDocTypes';
    orderBy = 'iControlID';
  }