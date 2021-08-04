import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PizzaViewerComponent,
    DrinkViewerComponent,
    SideViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: 'api', useValue: '  http://localhost:3000/pizzas' }
  ]
})
export class AppModule {}