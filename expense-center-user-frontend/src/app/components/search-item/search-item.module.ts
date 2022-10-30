import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SearchItemComponent } from './search-item.component';


@NgModule({
  declarations: [SearchItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SearchItemComponent]
})
export class SearchItemModule { }
