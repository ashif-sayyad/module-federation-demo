import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwAllRequisitionsService extends BaseService<string>{
    route = 'vwRequisitionListing';
    override orderBy = 'ID';
  }