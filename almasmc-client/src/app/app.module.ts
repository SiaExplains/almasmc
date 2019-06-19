import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule } from '@angular/flex-layout';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    NavtabsComponent,
    SidenavListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxHmCarouselModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
