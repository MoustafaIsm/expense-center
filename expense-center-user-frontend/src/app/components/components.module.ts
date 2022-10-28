import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './common/input/input.component';
import { DatePickerComponent } from './common/date-picker/date-picker.component';

@NgModule({
  declarations: [
    InputComponent,
    DatePickerComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    DatePickerComponent,
  ]
})
export class ComponentsModule { }
