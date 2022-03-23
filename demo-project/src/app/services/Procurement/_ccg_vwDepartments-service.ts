import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwDepartmentsService extends BaseService<string>{
    route = 'vwDepartments';
    override orderBy = 'ID';
  }