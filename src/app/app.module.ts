import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyForDirective} from './my-for/my-for.directive'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyForDirective
  
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
