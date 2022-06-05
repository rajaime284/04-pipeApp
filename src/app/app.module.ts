import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import locales from '@angular/common/locales/es-CU';
import {registerLocaleData} from '@angular/common';
registerLocaleData(locales);



import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
   { provide: LOCALE_ID, useValue: 'es-CU'  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
