import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ButtonModule } from './../ui-components/button/button.module';
import { DisplayModule } from './../ui-components/display/display.module';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    DisplayModule,
    MatCardModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
