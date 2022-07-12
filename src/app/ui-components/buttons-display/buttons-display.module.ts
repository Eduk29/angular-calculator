import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from './../button/button.module';
import { ButtonsDisplayComponent } from './buttons-display.component';

@NgModule({
    declarations: [ButtonsDisplayComponent],
    imports: [CommonModule, ButtonModule],
    exports: [ButtonsDisplayComponent],
})
export class ButtonsDisplayModule {}
