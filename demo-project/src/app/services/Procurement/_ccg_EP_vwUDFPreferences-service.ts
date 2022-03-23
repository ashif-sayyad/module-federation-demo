import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwUDFPreferencesService extends BaseService<string>{
    route = 'vwUDFPreferences';
    override orderBy = 'ID';
  }