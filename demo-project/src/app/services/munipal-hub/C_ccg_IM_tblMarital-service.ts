import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class MaritalService extends BaseService<string>{
    route = 'C_ccg_IM_tblMarital';
    orderBy = 'iControlID';
  }