import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwAreasService extends BaseService<string>{
    route = 'vwAreas';
    override orderBy = 'idAreas';
  }