import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccComAccComponent } from './acc-com-acc/acc-com-acc.component';

const routes: Routes = [
  {
    path: '',
    component: AccComAccComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccComAccRoutingModule { }
