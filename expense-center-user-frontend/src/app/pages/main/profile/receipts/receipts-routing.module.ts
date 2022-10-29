import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptsPage } from './receipts.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptsPage,
    children: [
      {
        path: 'income-receipts',
        loadChildren: () => import('./income-receipts/income-receipts.module').then(m => m.IncomeReceiptsPageModule)
      },
      {
        path: 'outcome-receipts',
        loadChildren: () => import('./outcome-receipts/outcome-receipts.module').then(m => m.OutcomeReceiptsPageModule)
      },
      {
        path: '',
        redirectTo: '/main/profile/receipts/income-receipts',
        pathMatch: 'full'
      }]
  },
  {
    path: '',
    redirectTo: '/main/profile/receipts/income-receipts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptsPageRoutingModule { }
