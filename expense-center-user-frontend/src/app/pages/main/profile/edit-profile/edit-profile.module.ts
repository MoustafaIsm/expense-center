import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { MainPagesHeaderModule } from 'src/app/components/main-pages-header/main-pages-header.module';

import { EditProfilePage } from './edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    MainPagesHeaderModule,
    ComponentsModule
  ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule { }
