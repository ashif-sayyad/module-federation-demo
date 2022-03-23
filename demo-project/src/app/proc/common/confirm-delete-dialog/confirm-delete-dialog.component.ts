import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css']
})
export class ConfirmDeleteDialogComponent {

  public isDeletePopupVisible: boolean = false;
  public message: string = "";

  @Output() private confirmDeleteClick: EventEmitter<any> = new EventEmitter();

  public closeConfirmMessageClick() {
    this.isDeletePopupVisible = false;
  }

  public confirmDeleteClicked() {
    this.confirmDeleteClick.emit();
  }

  show(message: string) {
    this.message = message;
    this.isDeletePopupVisible = true;
  }

  hide() {
    this.isDeletePopupVisible = false;
  }
}
