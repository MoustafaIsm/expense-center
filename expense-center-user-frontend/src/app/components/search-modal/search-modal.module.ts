import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SearchModalComponent } from './search-modal.component';
import { SearchItemModule } from '../search-item/search-item.module';
import { EmptyStateModule } from '../empty-state/empty-state.module';

@NgModule({
  declarations: [SearchModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    SearchItemModule,
    EmptyStateModule
  ],
  exports: [SearchModalComponent]
})
export class SearchModalModule { }
