import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-display',
  templateUrl: './buttons-display.component.html',
  styleUrls: ['./buttons-display.component.scss']
})
export class ButtonsDisplayComponent implements OnInit {

  @Input() numberButtonsMatrixDisplay: any [] [] = [];
  @Input() operationButtonsMatrixDisplay: any [] [] = [];

  constructor() { }

  ngOnInit(): void { }

}
