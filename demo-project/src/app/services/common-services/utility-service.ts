import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../services/config-service';

@Injectable({
  providedIn: 'root'
})

export class UtilitiesService {
//   baseAPIUrl="";
//   ReportsConString = "Data Source=MHLATHUZE\SQL2016;Initial Catalog=Mhlathuze Water;User ID=sa;Password=Camelsa@123;";

  baseAPIUrl=this.configService.baseAPIUrl;
  ReportsAPIUrl = this.configService.ReportsAPIUrl;
  baseAPIUrlHub = this.configService.baseAPIUrlHub;

  constructor(private configService: ConfigService) {
  }
}







