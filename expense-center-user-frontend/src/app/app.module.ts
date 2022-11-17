import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { GraphsModule } from './components/graphs/graphs.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    GraphsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
    StoreModule.forRoot(userReducer),
    StoreModule.forFeature('user', userReducer),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule { }
