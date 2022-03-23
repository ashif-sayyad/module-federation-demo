import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxPopupModule, DxToolbarModule, DxButtonModule, DxFormModule, DxTreeListModule, DxTabPanelModule, DxCheckBoxModule } from 'devextreme-angular';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ProcessingDialogComponent } from './processing-dialog/processing-dialog.component';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {RequestLogComponent} from './requestlog-dialog/requestlog-dialog.component';

@NgModule({
  declarations: [
    MessageDialogComponent, ConfirmDeleteDialogComponent, ConfirmDialogComponent, ProcessingDialogComponent, RequestLogComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxPopupModule,
    DxToolbarModule,
    DxButtonModule,
    DxFormModule,
    // Ng4LoadingSpinnerModule.forRoot(),
    DxTreeListModule,
    DxTabPanelModule,
    DxCheckBoxModule,
  ],
  exports: [
    MessageDialogComponent,
    ConfirmDeleteDialogComponent,
    ConfirmDialogComponent,
    ProcessingDialogComponent,
    RequestLogComponent   
  ]
})
export class CommonComponentsModule { }
