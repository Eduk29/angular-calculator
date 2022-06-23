import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { numberButtonConfiguration } from './../config/button-configuration';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  public buttonArray: any[] = [];
  public displayData: string | number = 0;
  public buttonMatrixDisplay: any [] [] = [];

  constructor() {}

  ngOnInit(): void {
    this.buttonArray = numberButtonConfiguration;
    this.buttonMatrixDisplay = this.createNumberButtonsMatrix();
  }

  private createNumberButtonsMatrix(): any [] [] {
    const buttonMatrix: any[] [] = [];
    const numberRows = numberButtonConfiguration.length / 3;
    const rowSize = 3;
    let initial = 0;

    for (let i = 0; i < numberRows; i++) {
      buttonMatrix.push(this.createMatrixRow(initial, rowSize));
      initial += 3;
    }
    console.log(buttonMatrix)
    return buttonMatrix;
  }

  private createMatrixRow(initial: number, rowSize: number): any[] {
    let buttonRow: any[] = [];

    this.buttonArray.map(() => {
      buttonRow = this.buttonArray.slice(initial, initial + rowSize);
    });
    return buttonRow;
  }
}

