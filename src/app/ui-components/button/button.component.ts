import { CoreService } from './../../core/core.service';
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

  constructor(private coreService: CoreService) { }

  ngOnInit(): void { }

  public buttonClickEvent(): void {
    // TODO: Change number string for enum
    if(this.buttonConfiguration.type === 'number') {
      this.coreService.numberClickEvent.next(this.buttonConfiguration);
    } else if (this.buttonConfiguration.type === 'operation') {
      this.coreService.operationClickEvent.next(this.buttonConfiguration);
    } else {
      this.coreService.generalClickEvent.next(this.buttonConfiguration);
    }
  }
}
