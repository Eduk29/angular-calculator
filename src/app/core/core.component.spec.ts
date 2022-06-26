import { CoreService } from './services/core.service';
import { ButtonConfiguration } from './model/button-configuration.model';
import { operationsUtils } from './utils/operations.utils';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';
import { buildButtonConfiguration } from './tests/core-tests.utils';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;
  let service: CoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreComponent ],
      providers: [ CoreService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${CoreComponent.prototype['calculate'].name} SHOULD calculate add and return 4 WHEN first number is 2 and second number is 2`, () => {
    component['firstNumber'] = 2;
    component['secondNumber'] = 2;
    component['operation'] = 'add';

    const result = component['calculate']();

    expect<any>(+result).toEqual(4);
  });

  it(`${CoreComponent.prototype['calculate'].name} SHOULD calculate minus and return 4 WHEN first number is 6 and second number is 2`, () => {
    component['firstNumber'] = 6;
    component['secondNumber'] = 2;
    component['operation'] = 'minus';

    const result = component['calculate']();

    expect<any>(+result).toEqual(4);
  });

  it(`${CoreComponent.prototype['calculate'].name} SHOULD calculate multiply and return 4 WHEN first number is 2 and second number is 2`, () => {
    component['firstNumber'] = 2;
    component['secondNumber'] = 2;
    component['operation'] = 'mul';

    const result = component['calculate']();

    expect<any>(+result).toEqual(4);
  });

  it(`${CoreComponent.prototype['calculate'].name} SHOULD calculate division and return 4 WHEN first number is 8 and second number is 2`, () => {
    component['firstNumber'] = 8;
    component['secondNumber'] = 2;
    component['operation'] = 'div';

    const result = component['calculate']();

    expect<any>(+result).toEqual(4);
  });

  it(`${CoreComponent.prototype['createButtonsMatrix'].name} SHOULD return a two dimensions matrix WHEN row size is 3 and mocked button configuration has 9 items`, () => {
    const rowSize: number = 3;
    const buttonConfigurations: ButtonConfiguration[] = buildButtonConfiguration();

    const matrix = component['createButtonsMatrix'](rowSize, buttonConfigurations);

    expect(matrix.length).toEqual(3);
    expect(matrix[0].length).toEqual(3);
    expect(matrix[1].length).toEqual(3);
    expect(matrix[2].length).toEqual(3);
  });

  it(`${CoreComponent.prototype['createMatrixRow'].name} SHOULD return an array with 3 elements WHEN row size is 3 and mocked button configuration has 9 items`, () => {
    const rowSize: number = 3;
    const buttonConfigurations: ButtonConfiguration[] = buildButtonConfiguration();
    const initial = 0;

    const row = component['createMatrixRow'](initial, rowSize, buttonConfigurations);

    expect(row.length).toEqual(3);
  });

  it(`${CoreComponent.prototype['generalButtonClickEvent'].name} SHOULD update secondNumber variable with displayData variable WHEN button pressed is equal button`, () => {
    spyOn<any>(component, 'calculate').and.callFake(() => {});
    const fakeEqualButton: ButtonConfiguration = {
      id: 1,
      label: '=',
      value: '=',
      type: 'general'
    };
    component['displayData'] = '2';
    component['secondNumber'] = 0;

    component['generalButtonClickEvent'](fakeEqualButton);

    expect(component['secondNumber']).toEqual(2);
  });

  it(`${CoreComponent.prototype['generalButtonClickEvent'].name} SHOULD call calculate function WHEN button pressed is equal button`, () => {
    spyOn<any>(component, 'calculate').and.callFake(() => { });
    const fakeEqualButton: ButtonConfiguration = {
      id: 1,
      label: '=',
      value: '=',
      type: 'general'
    };

    component['generalButtonClickEvent'](fakeEqualButton);

    expect(component['calculate']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['generalButtonClickEvent'].name} SHOULD call reset Calculator function WHEN button pressed is AC button`, () => {
    spyOn<any>(component, 'resetCalculator').and.callFake(() => { });
    const fakeACButton: ButtonConfiguration = {
      id: 1,
      label: 'AC',
      value: 'AC',
      type: 'general'
    };

    component['generalButtonClickEvent'](fakeACButton);

    expect(component['resetCalculator']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['generalButtonClickEvent'].name} SHOULD call reset calculator function with hard parameter WHEN button pressed is AC button`, () => {
    spyOn<any>(component, 'resetCalculator').and.callFake(() => { });
    const fakeACButton: ButtonConfiguration = {
      id: 1,
      label: 'AC',
      value: 'AC',
      type: 'general'
    };

    component['generalButtonClickEvent'](fakeACButton);

    expect(component['resetCalculator']).toHaveBeenCalledOnceWith('hard');
  });

  it(`${CoreComponent.prototype['generalButtonClickEvent'].name} SHOULD call number button click event function WHEN button pressed is decimal button`, () => {
    spyOn<any>(component, 'numberButtonClickEvent').and.callFake(() => { });
    const fakeDecimalButton: ButtonConfiguration = {
      id: 1,
      label: '.',
      value: '.',
      type: 'general'
    };

    component['generalButtonClickEvent'](fakeDecimalButton);

    expect(component['numberButtonClickEvent']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['generalButtonClickEvent'].name} SHOULD call number button click event function with decimal button data WHEN button pressed is decimal button`, () => {
    spyOn<any>(component, 'numberButtonClickEvent').and.callFake(() => { });
    const fakeDecimalButton: ButtonConfiguration = {
      id: 1,
      label: '.',
      value: '.',
      type: 'general'
    };

    component['generalButtonClickEvent'](fakeDecimalButton);

    expect(component['numberButtonClickEvent']).toHaveBeenCalledWith(fakeDecimalButton);
  });

  it(`${CoreComponent.prototype['getRowFromArray'].name} SHOULD return an array with 3 elements WHEN row size is 3 and number of elements in buttons configurations is 9`, () => {
    const rowSize: number = 3;
    const buttonConfigurations: ButtonConfiguration[] = buildButtonConfiguration();
    const initial = 0;

    const row = component['getRowFromArray'](buttonConfigurations, initial, rowSize);

    expect(row.length).toEqual(3);
  });

  it(`${CoreComponent.prototype['hardReset'].name} SHOULD reset all variables WHEN called`, () => {
    component['hardReset']();

    expect(component['displayData']).toEqual('0');
    expect(component['firstNumber']).toEqual(0);
    expect(component['secondNumber']).toEqual(0);
    expect(component['operation']).toEqual('');
  });

  it(`${CoreComponent.prototype['isNewCalculus'].name} SHOULD return true WHEN first number, second number and display data is not empty`, () => {
    component['firstNumber'] = 2;
    component['secondNumber'] = 2;
    component['displayData'] = '4';

    const validation = component['isNewCalculus']();

    expect(validation).toEqual(true);
  });

  it(`${CoreComponent.prototype['isNewCalculus'].name} SHOULD return false WHEN first number and display data is not empty and second number is zero`, () => {
    component['firstNumber'] = 2;
    component['secondNumber'] = 0;
    component['displayData'] = '4';

    const validation = component['isNewCalculus']();

    expect(validation).toEqual(false);
  });

  it(`${CoreComponent.prototype['numberButtonClickEvent'].name} SHOULD replace displayData variable with number button data passed in parameters WHEN the number in dataDisplay is zero`, () => {
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '2',
      value: '2',
      type: 'number'
    };

    component.displayData = '0';

    component['numberButtonClickEvent'](fakeNumberButton);

    expect(component.displayData).toEqual('2');
  });

  it(`${CoreComponent.prototype['numberButtonClickEvent'].name} SHOULD concat displayData variable with number button data passed in parameters WHEN the number in dataDisplay is not zero`, () => {
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '2',
      value: '2',
      type: 'number'
    };

    component.displayData = '23';

    component['numberButtonClickEvent'](fakeNumberButton);

    expect(component.displayData).toEqual('232');
  });

  it(`${CoreComponent.prototype['numberButtonClickEvent'].name} SHOULD verify the new calculus flow WHEN some number click event occurs`, () => {
    spyOn<any>(component, 'verifyNewCalculusFlow');
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '2',
      value: '2',
      type: 'number'
    };

    component.displayData = '23';

    component['numberButtonClickEvent'](fakeNumberButton);

    expect(component['verifyNewCalculusFlow']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['numberButtonClickEvent'].name} SHOULD verify the new calculus flow with button pressed data WHEN some number click event occurs`, () => {
    spyOn<any>(component, 'verifyNewCalculusFlow');
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '2',
      value: '2',
      type: 'number'
    };

    component.displayData = '23';

    component['numberButtonClickEvent'](fakeNumberButton);

    expect(component['verifyNewCalculusFlow']).toHaveBeenCalledWith(fakeNumberButton);
  });

  it(`${CoreComponent.prototype['operationButtonClickEvent'].name} SHOULD update first number with displayData variable WHEN some operation click event occurs`, () => {
    spyOn<any>(component, 'resetCalculator').and.callFake(() => {});
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '+',
      value: 'add',
      type: 'operation'
    };
    component.displayData = '23';

    component['operationButtonClickEvent'](fakeNumberButton);

    expect(component['firstNumber']).toBe(23);
  });

  it(`${CoreComponent.prototype['operationButtonClickEvent'].name} SHOULD update operation with operation button data WHEN some operation click event occurs`, () => {
    spyOn<any>(component, 'resetCalculator').and.callFake(() => { });
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '+',
      value: 'add',
      type: 'operation'
    };

    component['operationButtonClickEvent'](fakeNumberButton);

    expect(component['operation']).toBe('add');
  });

  it(`${CoreComponent.prototype['operationButtonClickEvent'].name} SHOULD call reset calculator fuction to clean display screen WHEN variables updates`, () => {
    spyOn<any>(component, 'resetCalculator').and.callFake(() => { });
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '+',
      value: 'add',
      type: 'operation'
    };

    component['operationButtonClickEvent'](fakeNumberButton);

    expect(component['resetCalculator']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['operationButtonClickEvent'].name} SHOULD call reset calculator fuction to clean display screen with parameter soft WHEN variables updates`, () => {
    spyOn<any>(component, 'resetCalculator').and.callFake(() => { });
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '+',
      value: 'add',
      type: 'operation'
    };

    component['operationButtonClickEvent'](fakeNumberButton);

    expect(component['resetCalculator']).toHaveBeenCalledWith('soft');
  });

  // TODO: ADD registerClickSubscriptions Tests
  it(`${CoreComponent.prototype['registerClickSubscriptions'].name} SHOULD register a handle function to number click event WHEN called`, () => {
    spyOn<any>(component, 'numberButtonClickEvent');
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '1',
      value: '1',
      type: 'number'
    };

    service.numberClickEvent$.next(fakeNumberButton);
    component['registerClickSubscriptions']();

    expect(component['numberButtonClickEvent']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['registerClickSubscriptions'].name} SHOULD call a handle function to number click event with number button data WHEN called`, () => {
    spyOn<any>(component, 'numberButtonClickEvent');
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '1',
      value: '1',
      type: 'number'
    };

    service.numberClickEvent$.next(fakeNumberButton);
    component['registerClickSubscriptions']();

    expect(component['numberButtonClickEvent']).toHaveBeenCalledWith(fakeNumberButton);
  });

  it(`${CoreComponent.prototype['registerClickSubscriptions'].name} SHOULD register a handle function to operation click event WHEN called`, () => {
    spyOn<any>(component, 'operationButtonClickEvent');
    const fakeOperationButton: ButtonConfiguration = {
      id: 1,
      label: '+',
      value: 'add',
      type: 'operation'
    };

    service.operationClickEvent$.next(fakeOperationButton);
    component['registerClickSubscriptions']();

    expect(component['operationButtonClickEvent']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['registerClickSubscriptions'].name} SHOULD call a handle function to operation click event with operation button data WHEN called`, () => {
    spyOn<any>(component, 'operationButtonClickEvent');
    const fakeOperationButton: ButtonConfiguration = {
      id: 1,
      label: '+',
      value: 'add',
      type: 'operation'
    };


    service.operationClickEvent$.next(fakeOperationButton);
    component['registerClickSubscriptions']();

    expect(component['operationButtonClickEvent']).toHaveBeenCalledWith(fakeOperationButton);
  });

  it(`${CoreComponent.prototype['registerClickSubscriptions'].name} SHOULD register a handle function to ganeral button click event WHEN called`, () => {
    spyOn<any>(component, 'generalButtonClickEvent');
    const fakeGeneralButton: ButtonConfiguration = {
      id: 1,
      label: '+',
      value: 'add',
      type: 'operation'
    };

    service.generalClickEvent$.next(fakeGeneralButton);
    component['registerClickSubscriptions']();

    expect(component['generalButtonClickEvent']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['registerClickSubscriptions'].name} SHOULD call a handle function to general button click event with general button data WHEN called`, () => {
    spyOn<any>(component, 'generalButtonClickEvent');
    const fakeGeneralButton: ButtonConfiguration = {
      id: 1,
      label: '+',
      value: 'add',
      type: 'operation'
    };


    service.generalClickEvent$.next(fakeGeneralButton);
    component['registerClickSubscriptions']();

    expect(component['generalButtonClickEvent']).toHaveBeenCalledWith(fakeGeneralButton);
  });


  it(`${CoreComponent.prototype['resetCalculator'].name} SHOULD call soft reset fuction WHEN parameter is soft`, () => {
    spyOn<any>(component, 'softReset').and.callFake(() => { });
    const fakeMode: string = 'soft';

    component['resetCalculator'](fakeMode);

    expect(component['softReset']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['resetCalculator'].name} SHOULD call hard reset fuction WHEN parameter is hard`, () => {
    spyOn<any>(component, 'hardReset').and.callFake(() => { });
    const fakeMode: string = 'hard';

    component['resetCalculator'](fakeMode);

    expect(component['hardReset']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['softReset'].name} SHOULD clean the displayData variable WHEN called`, () => {
    component['softReset']();

    expect(component.displayData).toBe('0');
  });

  it(`${CoreComponent.prototype['verifyNewCalculusFlow'].name} SHOULD verify if is a new calculus WHEN called`, () => {
    spyOn<any>(component, 'isNewCalculus').and.callFake(() => {});
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '=',
      value: '=',
      type: 'general'
    };

    component['verifyNewCalculusFlow'](fakeNumberButton);

    expect(component['isNewCalculus']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['verifyNewCalculusFlow'].name} SHOULD reset hard the calculator WHEN the flow is a new calculus flow`, () => {
    spyOn<any>(component, 'isNewCalculus').and.returnValues(true);
    spyOn<any>(component, 'resetCalculator');
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '=',
      value: '=',
      type: 'general'
    };

    component['verifyNewCalculusFlow'](fakeNumberButton);

    expect(component['resetCalculator']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['verifyNewCalculusFlow'].name} SHOULD reset hard the calculator with hard parameter WHEN the flow is a new calculus flow`, () => {
    spyOn<any>(component, 'isNewCalculus').and.returnValues(true);
    spyOn<any>(component, 'resetCalculator');
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '=',
      value: '=',
      type: 'general'
    };

    component['verifyNewCalculusFlow'](fakeNumberButton);

    expect(component['resetCalculator']).toHaveBeenCalledWith('hard');
  });

  it(`${CoreComponent.prototype['verifyNewCalculusFlow'].name} SHOULD initiate a new calculus flow callig number button click event WHEN the flow is a new calculus flow`, () => {
    spyOn<any>(component, 'isNewCalculus').and.returnValues(true);
    spyOn<any>(component, 'resetCalculator');
    spyOn<any>(component, 'numberButtonClickEvent');
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '=',
      value: '=',
      type: 'general'
    };

    component['verifyNewCalculusFlow'](fakeNumberButton);

    expect(component['numberButtonClickEvent']).toHaveBeenCalled();
  });

  it(`${CoreComponent.prototype['verifyNewCalculusFlow'].name} SHOULD initiate a new calculus flow callig number button click event with button configuration data WHEN the flow is a new calculus flow`, () => {
    spyOn<any>(component, 'isNewCalculus').and.returnValues(true);
    spyOn<any>(component, 'resetCalculator');
    spyOn<any>(component, 'numberButtonClickEvent');
    const fakeNumberButton: ButtonConfiguration = {
      id: 1,
      label: '=',
      value: '=',
      type: 'general'
    };

    component['verifyNewCalculusFlow'](fakeNumberButton);

    expect(component['numberButtonClickEvent']).toHaveBeenCalledWith(fakeNumberButton);
  });

});
