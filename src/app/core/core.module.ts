import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ScreenDisplayModule } from '../ui-components/screen-display/screen-display.module';
import { ButtonModule } from './../ui-components/button/button.module';
import { ButtonsDisplayModule } from './../ui-components/buttons-display/buttons-display.module';
import { CoreComponent } from './core.component';
import { CoreService } from './services/core.service';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    ButtonModule,
    ButtonsDisplayModule,
    CommonModule,
    ScreenDisplayModule,
    MatCardModule,
  ],
  providers: [CoreService],
  exports: [CoreComponent],
})
export class CoreModule {}
