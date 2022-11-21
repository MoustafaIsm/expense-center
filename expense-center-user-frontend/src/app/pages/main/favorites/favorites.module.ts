import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { MainPagesHeaderModule } from 'src/app/components/main-pages-header/main-pages-header.module';
import { SearchModalModule } from 'src/app/components/search-modal/search-modal.module';
import { EmptyStateModule } from 'src/app/components/empty-state/empty-state.module';

import { FavoritesPage } from './favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    MainPagesHeaderModule,
    SearchModalModule,
    EmptyStateModule,
    ComponentsModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule { }
