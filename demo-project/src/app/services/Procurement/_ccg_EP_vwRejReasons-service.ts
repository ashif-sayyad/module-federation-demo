import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRejReasonService extends BaseService<string>{
    route = 'vwRejectionReasons';
    override orderBy = 'ID';
  }