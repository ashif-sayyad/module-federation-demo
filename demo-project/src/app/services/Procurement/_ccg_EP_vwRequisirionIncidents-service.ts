import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRequisitionIncidentService extends BaseService<string>{
    route = 'vwRequisitionIncidents';
    override orderBy = 'ID';
  }