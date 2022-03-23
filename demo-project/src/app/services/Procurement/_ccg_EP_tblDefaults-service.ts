import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class tblDefaultsService extends BaseService<string>{
    route = 'tblDefaults';
    override orderBy = 'ID';
  }