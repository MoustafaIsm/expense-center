import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutcomeReceiptsPage } from './outcome-receipts.page';

const routes: Routes = [
  {
    path: '',
    component: OutcomeReceiptsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutcomeReceiptsPageRoutingModule {}
