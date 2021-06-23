import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

export const ROUTES: Routes = [
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    MailModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
