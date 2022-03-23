import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwEventCategoryLinkService extends BaseService<string>{
    route = 'vwEventCategoryLink';
    override orderBy = 'ID';
  }