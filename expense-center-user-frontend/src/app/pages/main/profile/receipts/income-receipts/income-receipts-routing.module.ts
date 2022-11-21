import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeReceiptsPage } from './income-receipts.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeReceiptsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeReceiptsPageRoutingModule {}
