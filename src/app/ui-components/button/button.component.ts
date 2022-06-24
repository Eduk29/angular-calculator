import { ButtonConfiguration } from './../../core/model/button-configuration.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonConfiguration: ButtonConfiguration = {} as ButtonConfiguration;
  @Input() color: string = 'primary';

  constructor() { }

  ngOnInit(): void { }

  public buttonClickEvent(): void {
    console.log('teste');
  }

}
