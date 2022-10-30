import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SearchModalComponent } from './search-modal.component';

@NgModule({
  declarations: [SearchModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SearchModalComponent]
})
export class SearchModalModule { }
