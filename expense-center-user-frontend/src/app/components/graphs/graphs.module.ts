import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LineGraphComponent } from './line-graph/line-graph.component';

@NgModule({
  declarations: [
    LineGraphComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LineGraphComponent
  ]
})
export class GraphsModule { }
