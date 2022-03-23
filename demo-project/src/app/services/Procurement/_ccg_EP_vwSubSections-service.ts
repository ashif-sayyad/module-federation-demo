import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSubSectionsService extends BaseService<string>{
    route = 'vwSubSections';
    override orderBy = 'ID';
  }