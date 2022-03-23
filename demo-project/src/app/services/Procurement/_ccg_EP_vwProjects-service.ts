import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwProjectsService extends BaseService<string>{
    route = 'vwProjects';
    orderBy = 'ProjectLink';
  }