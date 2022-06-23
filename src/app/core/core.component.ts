import { Component, OnInit } from '@angular/core';

import { numberButtonConfiguration, operationsButtonConfiguration } from './../config/button-configuration';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  public displayData: string | number = 0;
  public numberButtonsMatrixDisplay: any [] [] = [];
  public operationButtonsMatrixDisplay: any [] [] = [];

  constructor() {}

  ngOnInit(): void {
    this.numberButtonsMatrixDisplay = this.createNumberButtonsMatrix();
    this.operationButtonsMatrixDisplay = this.createOperationButtonsMatrix();
  }

  private createNumberButtonsMatrix(): any [] [] {
    const buttonMatrix: any[] [] = [];
    const numberRows = numberButtonConfiguration.length / 3;
    const rowSize = 3;
    let initial = 0;

    for (let i = 0; i < numberRows; i++) {
      buttonMatrix.push(this.createMatrixRow(initial, rowSize, numberButtonConfiguration));
      initial += 3;
    }
    console.log(buttonMatrix);
    return buttonMatrix;
  }

  private createOperationButtonsMatrix(): any [] [] {
    const buttonMatrix: any[] [] = [];
    const numberRows = operationsButtonConfiguration.length / 1;
    const rowSize = 1;
    let initial = 0;

    for (let i = 0; i < numberRows; i++) {
      buttonMatrix.push(this.createMatrixRow(initial, rowSize, operationsButtonConfiguration));
      initial += 1;
    }
    console.log(buttonMatrix);
    return buttonMatrix;

  }

  private createMatrixRow(initial: number, rowSize: number, array: any[]): any[] {
    let buttonRow: any[] = [];

    array.map(() => {
      buttonRow = array.slice(initial, initial + rowSize);
    });
    return buttonRow;
  }
}

