import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwGLSTService extends BaseService<string>{
    route = 'vwGLST';
    override orderBy = 'ID';
  }