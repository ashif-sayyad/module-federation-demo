import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwManagersService extends BaseService<string>{
    route = 'vwManagers';
    override orderBy = 'ID';
  }