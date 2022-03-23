import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSegmentSetupService extends BaseService<string>{
    route = 'vwSegmentSetup';
    override orderBy = 'idSegmentNo';
  }