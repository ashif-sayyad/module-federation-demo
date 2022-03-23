import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTenderService extends BaseService<string>{
    route = 'vwTender';
    override orderBy = 'ID';
  }