import { ButtonConfiguration } from './../../core/model/button-configuration.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-display',
  templateUrl: './buttons-display.component.html',
  styleUrls: ['./buttons-display.component.scss']
})
export class ButtonsDisplayComponent implements OnInit {

  @Input() numberButtonsMatrixDisplay: any [] [] = [];
  @Input() operationButtonsMatrixDisplay: any [] [] = [];
  @Input() generalPurposeButtonsMatrixDisplay: any [] = [];

  constructor() { }

  ngOnInit(): void { }

  public defineButtonSize(button: ButtonConfiguration): string {
    return button.value !== '=' ? 'mx-1 w-33' : 'ms-1 w-66';
  }

  public defineButtonId(button: ButtonConfiguration): string {
    return `button-${button.cssIdentifier}`;
  }
}
