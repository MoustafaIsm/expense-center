import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SearchModalComponent } from './search-modal.component';
import { SearchItemModule } from '../search-item/search-item.module';

@NgModule({
  declarations: [SearchModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    SearchItemModule
  ],
  exports: [SearchModalComponent]
})
export class SearchModalModule { }
