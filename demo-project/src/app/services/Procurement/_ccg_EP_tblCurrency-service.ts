import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class tblCurrenciesService extends BaseService<string>{
    route = 'tblCurrencies';
    override orderBy = 'ID';
  }