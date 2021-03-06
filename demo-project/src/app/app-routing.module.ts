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
  { path: 'defaults32', loadChildren: () => import('./proc/defaults32/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults33', loadChildren: () => import('./proc/defaults33/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults34', loadChildren: () => import('./proc/defaults34/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults35', loadChildren: () => import('./proc/defaults35/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults36', loadChildren: () => import('./proc/defaults36/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults37', loadChildren: () => import('./proc/defaults37/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults38', loadChildren: () => import('./proc/defaults38/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults39', loadChildren: () => import('./proc/defaults39/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults40', loadChildren: () => import('./proc/defaults40/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults41', loadChildren: () => import('./proc/defaults41/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults42', loadChildren: () => import('./proc/defaults42/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults43', loadChildren: () => import('./proc/defaults43/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults44', loadChildren: () => import('./proc/defaults44/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults45', loadChildren: () => import('./proc/defaults45/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults46', loadChildren: () => import('./proc/defaults46/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults47', loadChildren: () => import('./proc/defaults47/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults48', loadChildren: () => import('./proc/defaults48/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults49', loadChildren: () => import('./proc/defaults49/defaults.module').then(m => m.DefaultsModule)},
  { path: 'defaults50', loadChildren: () => import('./proc/defaults50/defaults.module').then(m => m.DefaultsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
