
import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwIndividualTenderRespondentsService extends BaseService<string>{
    route = 'vwIndividualTenderRespondents';
    override orderBy = 'ID';
  }