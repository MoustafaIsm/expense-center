import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IncomeReceiptsPageRoutingModule } from './income-receipts-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { EmptyStateModule } from 'src/app/components/empty-state/empty-state.module';

import { IncomeReceiptsPage } from './income-receipts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeReceiptsPageRoutingModule,
    EmptyStateModule,
    ComponentsModule
  ],
  declarations: [IncomeReceiptsPage]
})
export class IncomeReceiptsPageModule { }
