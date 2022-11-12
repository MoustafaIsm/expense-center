import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LineGraphComponent } from './line-graph/line-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    LineGraphComponent,
    BarGraphComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LineGraphComponent,
    BarGraphComponent
  ]
})
export class GraphsModule { }
