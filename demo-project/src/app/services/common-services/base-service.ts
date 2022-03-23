import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
import { HttpClient, HttpParams} from '@angular/common/http';
import { UtilitiesService } from '../../services/common-services/utility-service';

@Injectable({
  providedIn: 'root'
})

export abstract class BaseService<T> {
  abstract route: string;
  orderBy = '';
  errorHandler:any;
  url;
  urlHub;
  private get orderByQuery(): string {
    return this.orderBy === '' ? '' : '?$orderby=' + this.orderBy;
  }

  constructor(protected httpClient: HttpClient,private UtilitiesService:UtilitiesService) {
    this.url= 'http://localhost:7070/';
    this.urlHub=this.UtilitiesService.baseAPIUrlHub;
  }

  get(): any {
    return this.httpClient.get<any>(this.url+`${this.route}`);
  }
  getFiltered(query=''): any {
    return this.httpClient.get<any>(this.url+`${this.route}${query}`);
  }
  getSingle(id: Number, query = ''): any {
    return this.httpClient.get<any>(this.url+`${this.route}(${id})${query}`);
  }

  utilitiesGet(query: string): any {
    return this.httpClient.get<any>(this.url+`${this.route}` + query);
  }

  searchNonOdata(query: string): any {
    return this.httpClient.get<any>(this.url+`` + query);
  }

  search(query: string): DataSource {
    return new DataSource({
      store: {
        type: 'odata',
        version: 4,
        url: this.url+'' + query
      }
    });
  }

  downloadFile(ID: string) {
    const REQUEST_URL = this.url + "api/NonODataAttachmentsDownload/DownloadFile";
    const HTTP_PARAMS = new HttpParams().set("fileID", ID);
    return this.httpClient.get(REQUEST_URL, {
        params: HTTP_PARAMS,
        responseType: 'arraybuffer'
    })
  }

  downloadAdditionalFile(ID: string) {
    const REQUEST_URL = this.url + "api/NonODataAdditionalAttachments/DownloadFile";
    const HTTP_PARAMS = new HttpParams().set("ID", ID);
    return this.httpClient.get(REQUEST_URL, {
        params: HTTP_PARAMS,
        responseType: 'arraybuffer'
    })
  }

  downloadQuote(ID: string) {
    const REQUEST_URL = this.url + "api/NonODataRFQAttachmentsDownload/DownloadRFQFile";
    const HTTP_PARAMS = new HttpParams().set("iRFQID", ID);
    return this.httpClient.get(REQUEST_URL, {
        params: HTTP_PARAMS,
        responseType: 'arraybuffer'
    })
  }

  downloadTenderFile(ID: string) {
    const REQUEST_URL = this.url + "api/NonODataTender/DownloadAttachments";
    const HTTP_PARAMS = new HttpParams().set("fileID", ID);
    return this.httpClient.get(REQUEST_URL, {
        params: HTTP_PARAMS,
        responseType: 'arraybuffer'
    })
  }

  downloadDeviationFile(ID: string) {
    const REQUEST_URL = this.url + "api/NonODataDeviationAttachment/DownloadFile";
    const HTTP_PARAMS = new HttpParams().set("fileID", ID);
    return this.httpClient.get(REQUEST_URL, {
        params: HTTP_PARAMS,
        responseType: 'arraybuffer'
    })
  }

  downloadBudgetOverrideFile(ID: string) {
    const REQUEST_URL = this.url + "api/NonODataBudgetOverride/BudgetFileDownload";
    const HTTP_PARAMS = new HttpParams().set("ID", ID);
    return this.httpClient.get(REQUEST_URL, {
        params: HTTP_PARAMS,
        responseType: 'arraybuffer'
    })
  }

  downloadTemplate() {
    const REQUEST_URL = this.url + "api/NonODataDefaultImport/DownloadImportFile";
    const HTTP_PARAMS = new HttpParams();
    return this.httpClient.get(REQUEST_URL, {
        params: HTTP_PARAMS,
        responseType: 'arraybuffer'
    })
  }

  utilitiesPost(query:string, requestList:any):any {
    return this.httpClient.post<any>(this.url+`${this.route}` + query,requestList);
  }

  CustomFilePost(query:string, requestList:any,requestList1:any):any {
    return this.httpClient.post<any>(this.url+`${this.route}` + query,requestList,requestList1);
  }

  save(record: T) {
    return this.httpClient.post<any>(this.url+`${this.route}`, record);
  }

  delete(id: Number) {
    return this.httpClient.delete<any>(this.url+`${this.route}(${id})`);
  }

  public get oDataSource(): DataSource {
    return new DataSource({
      store: {
        type: 'odata',
        version: 4,
        url: this.UtilitiesService.baseAPIUrl+`${this.route}${this.orderByQuery}`
      }
    });
  }


  // Municipal Hub

  // utilitiesGetHub(query: string): any {
  //   return this.httpClient.get<any>(this.urlHub+`${this.route}` + query);
  // }

  // utilitiesPostHub(query:string, requestList:any):any {
  //   return this.httpClient.post<any>(this.urlHub+`${this.route}` + query,requestList);
  // }

  // public get oDataSourceHub(): DataSource {
  //   return new DataSource({
  //     store: {
  //       type: 'odata',
  //       version: 4,
  //       url: this.UtilitiesService.baseAPIUrlHub+`${this.route}${this.orderByQuery}`
  //     }
  //   });
  // }

  // searchNonOdataHub(query: string): any {
  //   return this.httpClient.get<any>(this.urlHub+`` + query);
  // }

  // deleteHub(id: Number) {
  //   return this.httpClient.delete<any>(this.urlHub+`${this.route}(${id})`);
  // }

  // downloadFileHub(ID: string) {
  //   const REQUEST_URL = this.urlHub + "api/FileDownload/getFile";
  //   const HTTP_PARAMS = new HttpParams().set("fileID", ID);
  //   return this.httpClient.get(REQUEST_URL, {
  //       params: HTTP_PARAMS,
  //       responseType: 'arraybuffer'
  //   })
  // }
}

