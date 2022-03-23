import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwSectionsService extends BaseService<string>{
    route = 'vwSections';
    override orderBy = 'ID';
  }