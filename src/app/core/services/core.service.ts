import { ButtonConfiguration } from './../model/button-configuration.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  public numberClickEvent$: Subject<ButtonConfiguration> =
    new Subject<ButtonConfiguration>();
  public operationClickEvent$: Subject<ButtonConfiguration> =
    new Subject<ButtonConfiguration>();
  public generalClickEvent$: Subject<ButtonConfiguration> =
    new Subject<ButtonConfiguration>();

  constructor() {}

  public callNextOnNumberSubject(button: ButtonConfiguration): void {
    this.numberClickEvent$.next(button);
  }

  public callNextOnOperationSubject(button: ButtonConfiguration): void {
    this.operationClickEvent$.next(button);
  }

  public callNextOnGeneralSubject(button: ButtonConfiguration): void {
    this.generalClickEvent$.next(button);
  }
}
