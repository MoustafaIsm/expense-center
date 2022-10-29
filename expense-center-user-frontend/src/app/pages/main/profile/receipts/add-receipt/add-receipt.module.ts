import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddReceiptPageRoutingModule } from './add-receipt-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { MainPagesHeaderModule } from 'src/app/components/main-pages-header/main-pages-header.module';

import { AddReceiptPage } from './add-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddReceiptPageRoutingModule,
    MainPagesHeaderModule,
    ComponentsModule
  ],
  declarations: [AddReceiptPage]
})
export class AddReceiptPageModule { }
