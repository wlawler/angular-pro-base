import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent} from './auth-message.component';

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent, 
    AuthMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
   AuthRememberComponent
  ], 
  entryComponents: [
    AuthFormComponent
  ]
})
export class AuthFormModule {}