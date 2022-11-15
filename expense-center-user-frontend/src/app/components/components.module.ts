import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// Modules
import { GraphsModule } from './graphs/graphs.module';

// Components
import { InputComponent } from './common/input/input.component';
import { DatePickerComponent } from './common/date-picker/date-picker.component';
import { RadioGroupComponent } from './common/radio-group/radio-group.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { UserInfoCardComponent } from './user-info-card/user-info-card.component';
import { ReceiptCardComponent } from './receipt-card/receipt-card.component';
import { DropdownListComponent } from './common/dropdown-list/dropdown-list.component';
import { FileInputComponent } from './common/file-input/file-input.component';
import { UserProfileInfoCardComponent } from './user-profile-info-card/user-profile-info-card.component';
import { LoadingStateComponent } from './loading-state/loading-state.component';

@NgModule({
  declarations: [
    InputComponent,
    DatePickerComponent,
    RadioGroupComponent,
    DropdownListComponent,
    UserInfoCardComponent,
    ChatItemComponent,
    ReceiptCardComponent,
    FileInputComponent,
    UserProfileInfoCardComponent,
    LoadingStateComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GraphsModule
  ],
  exports: [
    InputComponent,
    DatePickerComponent,
    RadioGroupComponent,
    DropdownListComponent,
    UserInfoCardComponent,
    ChatItemComponent,
    ReceiptCardComponent,
    FileInputComponent,
    UserProfileInfoCardComponent,
    LoadingStateComponent
  ]
})
export class ComponentsModule { }
