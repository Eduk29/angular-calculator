import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DisplayComponent } from './display.component';

@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    DisplayComponent
  ]
})
export class DisplayModule { }
