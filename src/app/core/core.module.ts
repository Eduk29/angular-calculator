import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ScreenDisplayModule } from '../ui-components/screen-display/screen-display.module';
import { ButtonModule } from './../ui-components/button/button.module';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    ScreenDisplayModule,
    MatCardModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
