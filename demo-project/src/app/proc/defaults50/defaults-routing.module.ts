import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultsPageComponent} from './defaults-page/defaults-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultsRoutingModule { }