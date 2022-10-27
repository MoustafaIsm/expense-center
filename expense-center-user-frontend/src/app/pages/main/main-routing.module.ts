import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/main/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
