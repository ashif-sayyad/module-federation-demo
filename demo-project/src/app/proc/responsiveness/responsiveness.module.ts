import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsivenessPageComponent } from './responsiveness-page/responsiveness-page.component';
import {ResponsivenessRoutingModule} from './responsiveness-routing.module';
import {DxDataGridModule,DxProgressBarModule,DxNumberBoxModule,DxTabPanelModule,DxRadioGroupModule, DxButtonModule,DxDropDownButtonModule,DxDateBoxModule,DxFileUploaderModule,DxLookupModule,DxScrollViewModule,DxLoadPanelModule, DxPopupModule, DxToolbarModule, DxFormModule} from 'devextreme-angular';
import { CommonComponentsModule } from '../common/common.module';

@NgModule({
  declarations: [ResponsivenessPageComponent],
  imports: [
    CommonModule,
    ResponsivenessRoutingModule,
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
    CommonComponentsModule
  ],
  exports:[ResponsivenessPageComponent]
})
export class ResponsivenessModule { }
