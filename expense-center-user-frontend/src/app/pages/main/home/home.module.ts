import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { MainPagesHeaderModule } from 'src/app/components/main-pages-header/main-pages-header.module';
import { SearchModalModule } from 'src/app/components/search-modal/search-modal.module';

import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MainPagesHeaderModule,
    SearchModalModule,
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
