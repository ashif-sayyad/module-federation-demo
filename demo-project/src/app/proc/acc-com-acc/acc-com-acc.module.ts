import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccComAccRoutingModule } from './acc-com-acc-routing.module';
import { AccComAccComponent } from './acc-com-acc/acc-com-acc.component';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxDropDownButtonModule,
  DxFileUploaderModule,
  DxFormModule,
  DxLoadPanelModule,
  DxLookupModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxProgressBarModule,
  DxRadioGroupModule,
  DxScrollViewModule,
  DxTabPanelModule,
  DxToolbarModule,
} from 'devextreme-angular';
import { CommonComponentsModule } from '../common/common.module';

@NgModule({
  declarations: [AccComAccComponent],
  imports: [
    CommonModule,
    AccComAccRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxProgressBarModule,
    DxPopupModule,
    DxToolbarModule,
    DxFormModule,
    DxLoadPanelModule,
    DxFileUploaderModule,
    DxDropDownButtonModule,
    DxScrollViewModule,
    DxLookupModule,
    DxTabPanelModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxButtonModule,
    DxFileUploaderModule,
    DxPopupModule,
    DxToolbarModule,
    DxLookupModule,
    DxFormModule,
    DxProgressBarModule,
    DxRadioGroupModule,
    DxNumberBoxModule,
    CommonComponentsModule,
  ],
})
export class AccComAccModule {}
