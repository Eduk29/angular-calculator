import { ButtonConfiguration } from './model/button-configuration.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public numberClickEvent: Subject<ButtonConfiguration> = new Subject<ButtonConfiguration>();
  public operationClickEvent: Subject<ButtonConfiguration> = new Subject<ButtonConfiguration>();
  public generalClickEvent: Subject<ButtonConfiguration> = new Subject<ButtonConfiguration>();

  constructor() { }
}
