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
import { SiauiModule } from '../siaui/siaui.module';
import { DoorToDoorComponent } from './door-to-door/door-to-door.component';
import { TranslatorComponent } from './translator/translator.component';
import { ClearanceComponent } from './clearance/clearance.component';
import { SourcingComponent } from './sourcing/sourcing.component';
import { AppRoutingModule } from '../app-routing.module';
import { DiagComponent } from './jobs/diag/diag.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ContactsComponent,
    AboutComponent,
    JobsComponent,
    ServicesComponent,
    InquiryComponent,
    DoorToDoorComponent,
    TranslatorComponent,
    ClearanceComponent,
    SourcingComponent,
    DiagComponent,
    DiagComponent
  ],
  entryComponents: [
    DiagComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    SiauiModule
  ],
  exports: [
    HomeComponent,
    SliderComponent,
    DiagComponent
  ]
})
export class PageModule { }
