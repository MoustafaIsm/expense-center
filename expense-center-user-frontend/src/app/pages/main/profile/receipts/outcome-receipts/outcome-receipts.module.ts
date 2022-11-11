import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OutcomeReceiptsPageRoutingModule } from './outcome-receipts-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { EmptyStateModule } from 'src/app/components/empty-state/empty-state.module';

import { OutcomeReceiptsPage } from './outcome-receipts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutcomeReceiptsPageRoutingModule,
    EmptyStateModule,
    ComponentsModule
  ],
  declarations: [OutcomeReceiptsPage]
})
export class OutcomeReceiptsPageModule { }
