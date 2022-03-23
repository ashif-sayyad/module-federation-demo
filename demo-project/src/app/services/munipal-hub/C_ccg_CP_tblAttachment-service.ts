import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';
import {C_ccg_CP_tblAttachment} from '../../models/munipal-hub/C_ccg_CP_tblAttachment';

@Injectable({
    providedIn: 'root'
  })

export class AttachmentService extends BaseService<C_ccg_CP_tblAttachment>{
    route = 'C_ccg_CP_tblAttachment';
    orderBy = 'iAttachementID';
  }