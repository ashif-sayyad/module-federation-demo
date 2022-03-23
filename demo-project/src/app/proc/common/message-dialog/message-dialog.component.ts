import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent {
  public isMessagePopupVisible: boolean = false;
  public messageTitle: string = "System Message";
  public message: string = "";
  public showInformationIcon: boolean = true;
  public showWarningIcon: boolean = false;
  public messageType!: DialogMessageTypes;

  public closeMessageClick() {
    this.isMessagePopupVisible = false;
  }

  public show(message: string, messageType: DialogMessageTypes) {
    this.messageTitle = "System Message";
    this.message = message;
    this.showInformationIcon = true;
    this.showWarningIcon = false;
    if (messageType == DialogMessageTypes.SystemError) {
      this.showInformationIcon = false;
      this.showWarningIcon = true;
      this.messageTitle = "System Error";
    }
    this.isMessagePopupVisible = true;
  }
}

export enum DialogMessageTypes {
  SystemError,
  Information,
}


