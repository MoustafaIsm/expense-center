import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReceiptPage } from './add-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: AddReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddReceiptPageRoutingModule {}
