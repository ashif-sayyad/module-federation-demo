import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class FileUploadService extends BaseService<string>{
    route = 'api/FileUpload';
    orderBy = '';
  }