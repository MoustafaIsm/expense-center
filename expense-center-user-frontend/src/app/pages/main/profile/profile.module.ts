import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { GraphsModule } from 'src/app/components/graphs/graphs.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    GraphsModule,
    ComponentsModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
