import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { CoreService } from './../../core/services/core.service';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule],
  providers: [CoreService],
  exports: [ButtonComponent],
})
export class ButtonModule {}
