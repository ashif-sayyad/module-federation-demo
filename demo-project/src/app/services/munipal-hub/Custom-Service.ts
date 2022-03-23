import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class CustomService extends BaseService<string>{
    route = 'api/';
    orderBy = '';
  }