import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwAdditionalNotesService extends BaseService<string>{
    route = 'vwAdditionalNotes';
    override orderBy = 'ID';
  }