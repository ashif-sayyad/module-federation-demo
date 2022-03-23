import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwAllRequisitionsNoAgentService extends BaseService<string>{
    route = 'vwRequisitionListingNoAgent';
    override orderBy = 'ID';
  }