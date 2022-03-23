import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'access', loadChildren:() => import('./proc/acc-com-acc/acc-com-acc.module').then(m => m.AccComAccModule)},
  { path: 'defaults', loadChildren: () => import('./proc/defaults/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults1', loadChildren: () => import('./proc/defaults1/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults2', loadChildren: () => import('./proc/defaults2/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults3', loadChildren: () => import('./proc/defaults3/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults4', loadChildren: () => import('./proc/defaults4/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults5', loadChildren: () => import('./proc/defaults5/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults6', loadChildren: () => import('./proc/defaults6/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults7', loadChildren: () => import('./proc/defaults7/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults8', loadChildren: () => import('./proc/defaults8/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults9', loadChildren: () => import('./proc/defaults9/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults10', loadChildren: () => import('./proc/defaults10/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults11', loadChildren: () => import('./proc/defaults11/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults12', loadChildren: () => import('./proc/defaults12/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults13', loadChildren: () => import('./proc/defaults13/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults14', loadChildren: () => import('./proc/defaults14/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults15', loadChildren: () => import('./proc/defaults15/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults16', loadChildren: () => import('./proc/defaults16/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults17', loadChildren: () => import('./proc/defaults17/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults18', loadChildren: () => import('./proc/defaults18/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults19', loadChildren: () => import('./proc/defaults19/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults20', loadChildren: () => import('./proc/defaults20/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults21', loadChildren: () => import('./proc/defaults21/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults22', loadChildren: () => import('./proc/defaults22/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults23', loadChildren: () => import('./proc/defaults23/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults24', loadChildren: () => import('./proc/defaults24/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults25', loadChildren: () => import('./proc/defaults25/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults26', loadChildren: () => import('./proc/defaults26/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults27', loadChildren: () => import('./proc/defaults27/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults28', loadChildren: () => import('./proc/defaults28/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults29', loadChildren: () => import('./proc/defaults29/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults30', loadChildren: () => import('./proc/defaults30/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults31', loadChildren: () => import('./proc/defaults31/defaults.module').then(m => m.DefaultsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
