import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class AttachmentsService extends BaseService<string>{
    route = 'tblAttachments';
    override orderBy = 'ID';
  }