import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailerBoxComponent } from './trailer-box/trailer-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TrailerBoxComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TrailerBoxComponent
  ]
})
export class SiauiModule { }
