import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class FileDownloadService extends BaseService<string>{
    route = 'api/FileDownload';
    orderBy = '';
  }