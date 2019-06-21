import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { InquiryComponent } from './inquiry/inquiry.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ContactsComponent,
    AboutComponent,
    JobsComponent,
    ServicesComponent,
    InquiryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    SliderComponent,
  ]
})
export class PageModule { }
