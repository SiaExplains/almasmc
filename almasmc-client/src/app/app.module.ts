import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule } from '@angular/flex-layout';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './footer/footer.component';
import { PageModule } from './pages/page.module';
import { SharedModule } from './shared/shared.module';
import { NewsComponent } from './news/news.component';
import { SiauiModule } from './siaui/siaui.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent,
    FooterComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    PageModule,
    SiauiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
