import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRFQAttachmentsService extends BaseService<string>{
    route = 'vwRFQAttachments';
    // orderBy = 'ID';
  }