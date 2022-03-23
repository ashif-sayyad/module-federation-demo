import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRequisitionLinesService extends BaseService<string>{
    route = 'vwRequisitionLines';
    override orderBy = 'ID';
  }