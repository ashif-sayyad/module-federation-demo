import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwResponsivenessService extends BaseService<string>{
    route = 'vwResponsiveness';
    override orderBy = 'ID';
  }