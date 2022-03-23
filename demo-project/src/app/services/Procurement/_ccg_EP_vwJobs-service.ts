import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwJobsService extends BaseService<string>{
    route = 'vwJobs';
    override orderBy = 'ID';
  }