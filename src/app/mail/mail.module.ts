import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailFolderComponent } from './containers/mail-folder.component';

export const ROUTES: Routes = [
  { path: 'folder/:name', component: MailFolderComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
   MailFolderComponent,
   MailItemComponent,
    MailAppComponent,
    
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
