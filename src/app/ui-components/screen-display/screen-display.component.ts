import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-display',
  templateUrl: './screen-display.component.html',
  styleUrls: ['./screen-display.component.scss']
})
export class ScreenDisplayComponent implements OnInit {

  @Input() displayData: string | number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
