import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwEventsService extends BaseService<string>{
    route = 'vwEvents';
    override orderBy = 'ID';
  }