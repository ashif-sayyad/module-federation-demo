import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseAPIUrl:any;
  ReportsAPIUrl:any;
  baseAPIUrlHub:any;
  config:any;
  constructor(private httpClient: HttpClient) {

  }

  public loadConfig() {
    var result= this.httpClient.get('./assets/CcgAppConfig-eprocurement.json')
      .toPromise()
      .then((config: any) => {
        this.config = config;
         this.baseAPIUrl = this.config.baseAPIUrl;
         this.ReportsAPIUrl = this.config.ReportsAPIUrl;
         this.baseAPIUrlHub = this.config.baseAPIUrlHub;
      })
      .catch((err: any) => {
        this.baseAPIUrl="http://localhost:4435/";
      });

      return result;
  }
}
