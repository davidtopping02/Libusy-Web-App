import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    CoreModule
  ]
})
export class ContactModule { }
