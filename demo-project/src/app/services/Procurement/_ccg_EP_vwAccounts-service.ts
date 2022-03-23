import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwAccountsService extends BaseService<string>{
    route = 'vwAccounts';
    override orderBy = 'AccountLink';
  }