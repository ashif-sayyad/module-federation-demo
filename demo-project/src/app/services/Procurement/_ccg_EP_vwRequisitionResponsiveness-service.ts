import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRequisitionResponsivenessService extends BaseService<string>{
    route = 'vwRequisitionResponsiveness';
    override orderBy = 'ID';
  }