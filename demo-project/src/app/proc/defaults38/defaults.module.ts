import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultsRoutingModule} from './defaults-routing.module';
import {DxDataGridModule,DxProgressBarModule,DxHtmlEditorModule,DxCheckBoxModule, DxTextBoxModule,DxNumberBoxModule,DxTabPanelModule,DxRadioGroupModule, DxButtonModule,DxDropDownButtonModule,DxDateBoxModule,DxFileUploaderModule,DxLookupModule,DxScrollViewModule,DxLoadPanelModule, DxPopupModule, DxToolbarModule, DxFormModule} from 'devextreme-angular';
import { CommonComponentsModule } from '../common/common.module';
import { DefaultsPageComponent } from './defaults-page/defaults-page.component';

@NgModule({
  declarations: [DefaultsPageComponent],
  imports: [
    CommonModule,
    DefaultsRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxProgressBarModule,
    DxPopupModule,
    DxToolbarModule,
    DxFormModule,
    DxLoadPanelModule,
    DxCheckBoxModule,
    DxFileUploaderModule,
    DxDropDownButtonModule,
    DxScrollViewModule,
    DxLookupModule,
    DxTabPanelModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxButtonModule,
    DxTextBoxModule,
    DxFileUploaderModule,
    DxPopupModule,
    DxToolbarModule,
    DxLookupModule,
    DxFormModule,
    DxProgressBarModule,
    DxRadioGroupModule,
    DxNumberBoxModule,
    CommonComponentsModule,
    DxHtmlEditorModule
  ]
})
export class DefaultsModule { }
