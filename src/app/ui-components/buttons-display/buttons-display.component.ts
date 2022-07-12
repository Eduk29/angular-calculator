import { Component, Input } from '@angular/core';

import { ButtonConfiguration } from './../../core/model/button-configuration.model';

@Component({
    selector: 'app-buttons-display',
    templateUrl: './buttons-display.component.html',
    styleUrls: ['./buttons-display.component.scss'],
})
export class ButtonsDisplayComponent {
    @Input() numberButtonsMatrixDisplay: any[][] = [];
    @Input() operationButtonsMatrixDisplay: any[][] = [];
    @Input() generalPurposeButtonsMatrixDisplay: any[] = [];

    constructor() {}

    public defineButtonSize(button: ButtonConfiguration): string {
        return button.value !== '=' ? 'mx-1 w-33' : 'ms-1 w-66';
    }

    public defineButtonId(button: ButtonConfiguration): string {
        return `button-${button.cssIdentifier}`;
    }
}
