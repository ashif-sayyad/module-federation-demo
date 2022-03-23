import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwRFQEvaluationService extends BaseService<string>{
    route = 'vwRFQEvaluation';
    override orderBy = 'ID';
  }