import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
   AuthRememberComponent
  ]
})
export class AuthFormModule {}