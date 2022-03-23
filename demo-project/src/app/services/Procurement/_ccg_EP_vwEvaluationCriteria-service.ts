import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwEvaluationCriteriaService extends BaseService<string>{
    route = 'vwEvaluationCriteria';
    override orderBy = 'ID';
  }