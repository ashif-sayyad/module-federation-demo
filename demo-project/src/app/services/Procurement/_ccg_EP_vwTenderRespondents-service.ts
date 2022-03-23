import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwTenderRespondentsService extends BaseService<string>{
    route = 'vwTenderRespondents';
    override orderBy = 'ID';
  }