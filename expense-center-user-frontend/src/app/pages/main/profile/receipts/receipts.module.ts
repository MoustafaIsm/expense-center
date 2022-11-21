import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceiptsPageRoutingModule } from './receipts-routing.module';

import { MainPagesHeaderModule } from 'src/app/components/main-pages-header/main-pages-header.module';

import { ReceiptsPage } from './receipts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceiptsPageRoutingModule,
    MainPagesHeaderModule
  ],
  declarations: [ReceiptsPage]
})
export class ReceiptsPageModule { }
