import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
//import {InMemoryDataService} from './in-memory-data.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockInventoryModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
