import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IncomeReceiptsPageRoutingModule } from './income-receipts-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { IncomeReceiptsPage } from './income-receipts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeReceiptsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IncomeReceiptsPage]
})
export class IncomeReceiptsPageModule { }
