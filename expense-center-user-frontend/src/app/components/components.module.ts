import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './common/input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [InputComponent]
})
export class ComponentsModule { }
