import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRequisitionItemsService extends BaseService<string>{
    route = 'vwRequisitionItems';
    override orderBy = 'ID';
  }