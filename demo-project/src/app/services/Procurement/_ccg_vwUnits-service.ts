import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwUnitsService extends BaseService<string>{
    route = 'vwUnits';
    override orderBy = 'ID';
  }