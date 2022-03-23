import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class VendorsService extends BaseService<string>{
    route = 'Vendors';
    orderBy = 'DCLink';
  }