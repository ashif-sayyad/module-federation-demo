import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwBankService extends BaseService<string>{
    route = 'vwBank';
    // orderBy = 'ID';
  }