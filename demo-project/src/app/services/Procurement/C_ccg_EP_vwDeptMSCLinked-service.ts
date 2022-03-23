import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwDeptMSCLinkedService extends BaseService<string>{
    route = 'vwDeptMSCLink';
    override orderBy = 'ID';
  }