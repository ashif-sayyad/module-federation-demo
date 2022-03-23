import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwAccountsCommodyAccessService extends BaseService<string>{
    route = 'vwAccountCommodyAccess';
    override orderBy = 'ID';
  }