import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineGraphComponent } from './line-graph/line-graph.component';

@NgModule({
  declarations: [
    LineGraphComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineGraphComponent
  ]
})
export class GraphsModule { }
