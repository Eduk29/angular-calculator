import { CoreService } from './../../core/services/core.service';
import { ButtonConfiguration } from './../../core/model/button-configuration.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonConfiguration: ButtonConfiguration = {} as ButtonConfiguration;
  @Input() color: string = 'primary';

  public clickEventHandler: any = {
    number: () => this.coreService.callNextOnNumberSubject(this.buttonConfiguration),
    operation: () => this.coreService.callNextOnOperationSubject(this.buttonConfiguration),
    general: () => this.coreService.callNextOnGeneralSubject(this.buttonConfiguration)
  };

  constructor(private coreService: CoreService) { }

  ngOnInit(): void { }

  public buttonClickEvent(): void {
    this.clickEventHandler[this.buttonConfiguration.type]();
  }
}
