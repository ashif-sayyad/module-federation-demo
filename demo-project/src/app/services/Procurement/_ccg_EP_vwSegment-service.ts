import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSegmentService extends BaseService<string>{
    route = 'vwSegment';
    orderBy = 'idSegment';
  }