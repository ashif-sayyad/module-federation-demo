import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierSelectionPageComponent } from './supplier-selection-page/supplier-selection-page.component';
import {DxDataGridModule,DxProgressBarModule,DxNumberBoxModule,DxTabPanelModule,DxRadioGroupModule, DxButtonModule,DxDropDownButtonModule,DxDateBoxModule,DxLookupModule,DxScrollViewModule,DxLoadPanelModule, DxPopupModule, DxToolbarModule, DxFormModule} from 'devextreme-angular';
import { CommonComponentsModule } from '../common/common.module';

@NgModule({
  declarations: [SupplierSelectionPageComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxProgressBarModule,
    DxPopupModule,
    DxToolbarModule,
    DxFormModule,
    DxLoadPanelModule,
    DxDropDownButtonModule,
    DxScrollViewModule,
    DxLookupModule,
    DxTabPanelModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxToolbarModule,
    DxLookupModule,
    DxFormModule,
    DxProgressBarModule,
    DxRadioGroupModule,
    DxNumberBoxModule,
    CommonComponentsModule
  ],
  exports: [
    SupplierSelectionPageComponent 
  ]
})
export class SupplierSelectionModule { }
