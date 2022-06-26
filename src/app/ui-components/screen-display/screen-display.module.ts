import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ScreenDisplayComponent } from './screen-display.component';



@NgModule({
  declarations: [
    ScreenDisplayComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ScreenDisplayComponent
  ]
})
export class ScreenDisplayModule { }
