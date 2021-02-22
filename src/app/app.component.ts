import { AfterContentInit, Component, ViewChild, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html', 
  styleUrls: ['./app.component.css']

  
})

export class AppComponent {
 ctx = { 
   $implicit: 'Wes Lawler', 
   location: 'Louisville, KY'
 };
}