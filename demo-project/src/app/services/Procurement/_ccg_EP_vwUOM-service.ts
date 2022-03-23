import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwUOMService extends BaseService<string>{
    route = 'vwUOM';
    override orderBy = 'ID';
  }