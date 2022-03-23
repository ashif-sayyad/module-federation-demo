import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwDeviationAttachmentService extends BaseService<string>{
    route = 'tblDeviationAttachments';
    // orderBy = 'ID';
  }