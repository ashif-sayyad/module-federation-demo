import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwCommitmentDetailAnnualService extends BaseService<string>{
    route = 'vwCommitmentDetailAnnual';
    override orderBy = 'ID';
  }