import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiauiModule } from '../siaui/siaui.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { NewsComponent } from './news.component';


@NgModule({
  declarations: [
    NewsComponent,
  ],
  entryComponents: [
    NewsComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    SiauiModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
