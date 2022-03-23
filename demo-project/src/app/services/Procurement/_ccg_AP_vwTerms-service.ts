import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTermsService extends BaseService<string>{
    route = 'vwTerms';
    // orderBy = 'ID';
  }