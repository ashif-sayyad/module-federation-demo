import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  isConfirmPopupVisible: boolean=false;
  public message: string = "";
  public title:string="";

  @Output() private confirmClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

 public confirmClicked() {
    this.confirmClick.emit();
  }

  show(title:string, message: string) {
    this.message = message;
    this.title=title;
    this.isConfirmPopupVisible = true;
  }

  hide() {
    this.isConfirmPopupVisible = false;
  }
}
