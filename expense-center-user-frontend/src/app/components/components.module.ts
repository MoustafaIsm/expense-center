import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './common/input/input.component';
import { DatePickerComponent } from './common/date-picker/date-picker.component';
import { RadioGroupComponent } from './common/radio-group/radio-group.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { UserInfoCardComponent } from './user-info-card/user-info-card.component';

@NgModule({
  declarations: [
    InputComponent,
    DatePickerComponent,
    RadioGroupComponent,
    UserInfoCardComponent,
    ChatItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    DatePickerComponent,
    RadioGroupComponent,
    UserInfoCardComponent,
    ChatItemComponent
  ]
})
export class ComponentsModule { }
