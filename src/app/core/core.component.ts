import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import {
  generalPurposeButtonConfiguration,
  numberButtonConfiguration,
  numberRowSize,
  operationsButtonConfiguration,
  operationsRowSize,
} from './../config/button-configuration';
import { CoreService } from './core.service';
import { ButtonConfiguration } from './model/button-configuration.model';
import { operationsUtils } from './utils/operations.utils';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {

  public clickEvent = new Subject<ButtonConfiguration>();
  public displayData: string = '0';
  public generalPurposeMatrixDisplay: any[] = [];
  public numberButtonsMatrixDisplay: any[][] = [];
  public operationButtonsMatrixDisplay: any[][] = [];

  private firstNumber: number = 0;
  private operation: string = '';
  private secondNumber: number = 0;

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.registerClickSubscriptions();
    this.numberButtonsMatrixDisplay = this.createButtonsMatrix(numberRowSize, numberButtonConfiguration);
    this.operationButtonsMatrixDisplay = this.createButtonsMatrix(operationsRowSize, operationsButtonConfiguration);
    this.generalPurposeMatrixDisplay = generalPurposeButtonConfiguration;
  }

  private calculate(): string {
    return operationsUtils(this.operation, this.firstNumber, this.secondNumber);
  }

  private createButtonsMatrix(rowSize: number, buttonConfiguration: ButtonConfiguration[]): any[][] {
    const buttonMatrix: any[][] = [];
    const numberRows = buttonConfiguration.length / rowSize;
    let initial = 0;

    for (let i = 0; i < numberRows; i++) {
      buttonMatrix.push(this.createMatrixRow(initial, rowSize, buttonConfiguration));
      initial += rowSize;
    }
    return buttonMatrix;
  }

  private createMatrixRow(initial: number, rowSize: number, array: ButtonConfiguration[]): any[] {
    return this.getRowFromArray(array, initial, rowSize);
  }

  private generalButtonClickEvent(button: ButtonConfiguration): void {
    if (button.value === '=' && this.secondNumber === 0) {
      this.secondNumber = +this.displayData;
      this.displayData = this.calculate();
    }

    if (button.value === 'AC') {
      // TODO: CHANGE STRING TO ENUM
      this.resetCalculator('hard');
    }

    if (button.value === '.') {
      this.numberButtonClickEvent(button);
    }
  }

  private getRowFromArray(array: ButtonConfiguration[], initial: number, rowSize: number): ButtonConfiguration[] {
    let buttonRow: any[] = [];
    array.map(() => {
      buttonRow = array.slice(initial, initial + rowSize);
    });
    return buttonRow;
  }

  private hardReset(): void {
    this.displayData = '0';
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operation = '';
  }

  private isNewCalculus(): boolean {
    return this.firstNumber !== 0 && this.secondNumber !== 0 && +this.displayData !== 0;
  }

  private numberButtonClickEvent(button: ButtonConfiguration): void {
    if (this.displayData === '0') {
      this.displayData = button.label;
    } else {
      this.displayData = this.displayData.concat(button.label);
    }

    this.verifyNewCalculusFlow(button);
  }

  private operationButtonClickEvent(button: ButtonConfiguration): void {
    this.firstNumber = +this.displayData;
    this.operation = button.value as string;

    // TODO: CHANGE STRING TO ENUM
    this.resetCalculator('soft');
  }

  private registerClickSubscriptions(): void {
    this.coreService.numberClickEvent.subscribe(button => {
      this.numberButtonClickEvent(button);
    });

    this.coreService.operationClickEvent.subscribe(button => {
      this.operationButtonClickEvent(button);
    });

    this.coreService.generalClickEvent.subscribe(button => {
      this.generalButtonClickEvent(button);
    });
  }

  private resetCalculator(mode: string): void {
    // TODO: CHANGE STRING TO ENUM
    mode === 'soft' ? this.softReset() : this.hardReset();
  }

  private softReset(): void {
    this.displayData = '0';
  }

  private verifyNewCalculusFlow(button: ButtonConfiguration): void {
    if (this.isNewCalculus()) {
      this.resetCalculator('hard');  // TODO: CHANGE STRING TO ENUM
      this.numberButtonClickEvent(button);
    }
  }
}

