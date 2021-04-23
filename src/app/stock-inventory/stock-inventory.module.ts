import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import {InMemoryDataService } from '../in-memory-data.service';
//import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';


import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector/stock-selector.component';
import { StockCounterComponent} from './components/stock-counter/stock-counter.component';
import { StockInventoryService } from './services/stock-inventory.services';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockCounterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    HttpClientModule, 

  
  ],
  providers: [ 
    StockInventoryService
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule {}