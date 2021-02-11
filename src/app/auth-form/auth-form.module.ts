import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from '../auth-form/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

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