import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierSelectionPageComponent } from './supplier-selection-page/supplier-selection-page.component';

const routes: Routes = [
  {
    path: '',
    component: SupplierSelectionPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierSelectionPageRoutingModule { }
