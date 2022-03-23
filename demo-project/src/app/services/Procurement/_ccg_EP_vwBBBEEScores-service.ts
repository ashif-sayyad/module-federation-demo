import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwBBBEEScoresService extends BaseService<string>{
    route = 'vwBBBEEScores';
    override orderBy = 'ID';
  }