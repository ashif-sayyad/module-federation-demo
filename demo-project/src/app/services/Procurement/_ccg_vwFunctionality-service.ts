import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwFunctionalityService extends BaseService<string>{
    route = 'vwFunctionality';
    override orderBy = 'ID';
  }