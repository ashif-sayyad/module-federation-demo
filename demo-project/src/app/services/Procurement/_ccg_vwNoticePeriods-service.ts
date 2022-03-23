import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwNoticePeriodsService extends BaseService<string>{
    route = 'vwNoticePeriods';
    override orderBy = 'ID';
  }