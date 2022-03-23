import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwFunctionalityOptionsService extends BaseService<string>{
    route = 'vwFunctionalityOptions';
    override orderBy = 'ID';
  }