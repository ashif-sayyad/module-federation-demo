
import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwAllDeviationIncidentsService extends BaseService<string>{
    route = 'vwAllDeviationIncidents';
    override orderBy = 'ID';
  }