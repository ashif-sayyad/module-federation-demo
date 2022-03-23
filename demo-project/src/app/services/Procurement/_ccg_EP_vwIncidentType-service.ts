import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwIncidentTypeService extends BaseService<string>{
    route = 'vwIncidentType';
    override orderBy = 'ID';
  }