import { Injectable } from '@angular/core';
import { BaseService } from './base-service';

@Injectable({
    providedIn: 'root'
  })

export class CustomService extends BaseService<string>{
    route = 'api/';
    override orderBy = '';
  }