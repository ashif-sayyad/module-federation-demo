import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwCommitmentDetailPeriodService extends BaseService<string>{
    route = 'vwCommitmentDetailPeriod';
    override orderBy = 'ID';
  }