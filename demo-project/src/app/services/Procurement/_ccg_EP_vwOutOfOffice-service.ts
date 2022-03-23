import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwOutOfOfficeService extends BaseService<string>{
    route = 'vwOutOfOffice';
    override orderBy = 'ID';
  }