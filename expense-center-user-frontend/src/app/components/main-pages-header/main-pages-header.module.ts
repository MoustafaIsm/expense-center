import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MainPagesHeaderComponent } from './main-pages-header.component';

@NgModule({
  declarations: [MainPagesHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MainPagesHeaderComponent]
})
export class MainPagesHeaderModule { }
