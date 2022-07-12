import { Component, Input } from '@angular/core';

import { ButtonConfiguration } from './../../core/model/button-configuration.model';
import { CoreService } from './../../core/services/core.service';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() buttonConfiguration: ButtonConfiguration = {} as ButtonConfiguration;
    @Input() color: string = 'primary';

    public clickEventHandler: any = {
        number: () => this.coreService.callNextOnNumberSubject(this.buttonConfiguration),
        operation: () => this.coreService.callNextOnOperationSubject(this.buttonConfiguration),
        general: () => this.coreService.callNextOnGeneralSubject(this.buttonConfiguration),
    };

    constructor(private coreService: CoreService) {}

    public buttonClickEvent(): void {
        this.clickEventHandler[this.buttonConfiguration.type]();
    }
}
