import { Injectable } from '@angular/core';
import { BaseService } from '../services/common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwDepartmentService extends BaseService<string>{
    route = 'vwDepartments';
  }