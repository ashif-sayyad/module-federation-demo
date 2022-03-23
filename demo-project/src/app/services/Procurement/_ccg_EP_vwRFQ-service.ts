import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRFQService extends BaseService<string>{
    route = 'vwRFQ';
    override orderBy = 'ID';
  }