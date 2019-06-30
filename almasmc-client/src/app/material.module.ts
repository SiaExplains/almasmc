import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule, MatTabsModule, MatFormFieldModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})

export class MaterialModule { }
