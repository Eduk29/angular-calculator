import { ButtonConfiguration } from './model/button-configuration.model';
import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

const fakeButtonConfiguration: ButtonConfiguration = {
  id: 1,
  label: 'fake button',
  type: 'number',
  value: 'fake number'
};

describe('CoreService', () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('numberClickEvent$ SHOULD call next fuction WHEN callNextOnNumberSubject is called', () => {
    spyOn<any>(service.numberClickEvent$, 'next');

    service.callNextOnNumberSubject({} as ButtonConfiguration);

    expect(service.numberClickEvent$.next).toHaveBeenCalled();
  });

  it('numberClickEvent$ SHOULD call next fuction with button configuration WHEN callNextOnNumberSubject is called', () => {
    spyOn<any>(service.numberClickEvent$, 'next');

    service.callNextOnNumberSubject(fakeButtonConfiguration);

    expect(service.numberClickEvent$.next).toHaveBeenCalledWith(fakeButtonConfiguration);
  });

  it('numberClickEvent$ SHOULD return mocked data in next call WHEN callNextOnNumberSubject is called with mocked data', (done: DoneFn) => {
    service.numberClickEvent$.subscribe((button: ButtonConfiguration) => {
      expect(button).toBe(fakeButtonConfiguration);
      done();
    });

    service.callNextOnNumberSubject(fakeButtonConfiguration);

  });

  it('operationClickEvent$ SHOULD call next fuction WHEN callNextOnOperationSubject is called', () => {
    spyOn<any>(service.operationClickEvent$, 'next');

    service.callNextOnOperationSubject({} as ButtonConfiguration);

    expect(service.operationClickEvent$.next).toHaveBeenCalled();
  });

  it('operationClickEvent$ SHOULD call next fuction with button configuration WHEN callNextOnOperationSubject is called', () => {
    spyOn<any>(service.operationClickEvent$, 'next');

    service.callNextOnOperationSubject(fakeButtonConfiguration);

    expect(service.operationClickEvent$.next).toHaveBeenCalledWith(fakeButtonConfiguration);
  });

  it('operationClickEvent$ SHOULD return mocked data in next call WHEN callNextOnOperationSubject is called with mocked data', (done: DoneFn) => {
    service.operationClickEvent$.subscribe((button: ButtonConfiguration) => {
      expect(button).toBe(fakeButtonConfiguration);
      done();
    });

    service.callNextOnOperationSubject(fakeButtonConfiguration);

  });

  it('generalClickEvent$ SHOULD call next fuction WHEN callNextOnGeneralSubject is called', () => {
    spyOn<any>(service.generalClickEvent$, 'next');

    service.callNextOnGeneralSubject({} as ButtonConfiguration);

    expect(service.generalClickEvent$.next).toHaveBeenCalled();
  });

  it('generalClickEvent$ SHOULD call next fuction with button configuration WHEN callNextOnGeneralSubject is called', () => {
    spyOn<any>(service.generalClickEvent$, 'next');

    service.callNextOnGeneralSubject(fakeButtonConfiguration);

    expect(service.generalClickEvent$.next).toHaveBeenCalledWith(fakeButtonConfiguration);
  });

  it('generalClickEvent$ SHOULD return mocked data in next call WHEN callNextOnGeneralSubject is called with mocked data', (done: DoneFn) => {
    service.generalClickEvent$.subscribe((button: ButtonConfiguration) => {
      expect(button).toBe(fakeButtonConfiguration);
      done();
    });

    service.callNextOnGeneralSubject(fakeButtonConfiguration);

  });
});
