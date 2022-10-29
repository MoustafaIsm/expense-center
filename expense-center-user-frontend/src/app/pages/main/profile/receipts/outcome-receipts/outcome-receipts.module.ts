import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OutcomeReceiptsPageRoutingModule } from './outcome-receipts-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { OutcomeReceiptsPage } from './outcome-receipts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutcomeReceiptsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OutcomeReceiptsPage]
})
export class OutcomeReceiptsPageModule { }
