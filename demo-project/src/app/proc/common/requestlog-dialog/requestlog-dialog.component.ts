import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-requestlog-dialog',
  templateUrl: './requestlog-dialog.component.html',
  styleUrls: ['./requestlog-dialog.component.css']
})
export class RequestLogComponent {
  public isMessagePopupVisible: boolean = false;
  public messageTitle: string = "Transaction History";
  public RequestLog: any;

  public closeMessageClick() {
    this.isMessagePopupVisible = false;
  }

  public show(RequestLog: any) {
    this.messageTitle = "Transaction History";
    this.RequestLog = RequestLog;
  
    this.isMessagePopupVisible = true;
  }
}




