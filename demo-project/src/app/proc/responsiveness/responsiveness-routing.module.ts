import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResponsivenessPageComponent} from './responsiveness-page/responsiveness-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsivenessPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsivenessRoutingModule { }