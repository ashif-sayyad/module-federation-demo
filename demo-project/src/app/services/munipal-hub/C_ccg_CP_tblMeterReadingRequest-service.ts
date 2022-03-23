import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblMeterReadingRequest} from '../../models/munipal-hub/C_ccg_CP_tblMeterReadingRequest';

@Injectable({
    providedIn: 'root'
  })

export class MeterReadingReqService extends BaseService<C_ccg_CP_tblMeterReadingRequest>{
    route = 'C_ccg_CP_tblMeterReadingRequest';
    orderBy = 'iMRequestID';
  }