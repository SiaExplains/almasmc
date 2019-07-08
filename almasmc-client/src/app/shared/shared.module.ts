import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { LatinNumberPipe } from '../pipes/latin-number.pipe';
import { PersianCurrencyPipe } from '../pipes/persian-currency.pipe';
import { PersianDatePipe } from '../pipes/persian-date.pipe';
import { PersianNumberPipe } from '../pipes/persian-number.pipe';

@NgModule({
  declarations: [
    LatinNumberPipe,
    PersianCurrencyPipe,
    PersianDatePipe,
    PersianNumberPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxHmCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkf2sXglSDjAyA4VRFECU4Gmvnv9stsEM'
    })
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxHmCarouselModule,
    AgmCoreModule,
    LatinNumberPipe,
    PersianCurrencyPipe,
    PersianDatePipe,
    PersianNumberPipe
  ]
})
export class SharedModule { }
