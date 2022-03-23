import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwAllRequisitionIncidentsService extends BaseService<string>{
    route = 'vwAllRequisitionIncidents';
    override orderBy = 'ID';
  }