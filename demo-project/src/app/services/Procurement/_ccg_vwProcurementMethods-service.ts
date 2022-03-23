import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwProcurementMethodsService extends BaseService<string>{
    route = 'vwProcurementMethods';
    override orderBy = 'ID';
  }