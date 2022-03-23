import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRFQResponseService extends BaseService<string>{
    route = 'vwRFQResponse';
    override orderBy = 'ID';
  }