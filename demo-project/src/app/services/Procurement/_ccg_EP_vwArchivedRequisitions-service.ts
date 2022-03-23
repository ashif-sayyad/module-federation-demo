import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwArchivedRequisitionsService extends BaseService<string>{
    route = 'vwArchivedRequisitions';
    override orderBy = 'ID';
  }