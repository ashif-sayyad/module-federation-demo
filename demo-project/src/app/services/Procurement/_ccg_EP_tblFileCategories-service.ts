import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class tblFileCategoriesService extends BaseService<string>{
    route = 'tblFileCategories';
    override orderBy = 'ID';
  }