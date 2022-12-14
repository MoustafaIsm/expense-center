import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { GraphsModule } from 'src/app/components/graphs/graphs.module';
import { MainPagesHeaderModule } from 'src/app/components/main-pages-header/main-pages-header.module';

import { UserProfilePage } from './user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
    MainPagesHeaderModule,
    ComponentsModule,
    GraphsModule
  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule { }
