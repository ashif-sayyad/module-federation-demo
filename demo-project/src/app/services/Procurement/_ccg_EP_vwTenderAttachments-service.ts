import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTenderAttachmentsService extends BaseService<string>{
    route = 'vwTenderAttachments';
    override orderBy = 'ID';
  }