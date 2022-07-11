import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreService } from './../../core/services/core.service';
import { ButtonConfiguration } from './../../core/model/button-configuration.model';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let service: CoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      providers: [CoreService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CoreService);
    fixture.detectChanges();
  });

  it('SHOULD create component WHEN called', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD create service WHEN called', () => {
    expect(service).toBeTruthy();
  });

  it('color property SHOULD be primary WHEN no color passed as input', () => {
    expect(component.color).toBe('primary');
  });

  it('color property SHOULD not be primary WHEN color passed as input', () => {
    const fakeButtonConfiguration: ButtonConfiguration = {
      id: 1,
      label: 'fake button',
      type: 'number',
      value: 'fake number',
    };
    component.buttonConfiguration = fakeButtonConfiguration;

    expect(component.buttonConfiguration).not.toBe({} as ButtonConfiguration);
  });

  it('button configuration property SHOULD be empty object WHEN no button configuration is passed as input', () => {
    expect(component.buttonConfiguration).toEqual({} as ButtonConfiguration);
  });

  it('button configuration property SHOULD not be empty object WHEN button configuration is passed as input', () => {
    component.color = 'secondary';

    expect(component.color).not.toBe('primary');
  });

  it(`${ButtonComponent.prototype.buttonClickEvent.name} SHOULD call next on number subject WHEN called with type number`, () => {
    spyOn(service, 'callNextOnNumberSubject');
    component.buttonConfiguration.type = 'number';

    component.buttonClickEvent();

    expect(service.callNextOnNumberSubject).toHaveBeenCalled();
  });

  it(`${ButtonComponent.prototype.buttonClickEvent.name} SHOULD call next on number subject WHEN called with button configuration`, () => {
    spyOn(service, 'callNextOnNumberSubject');
    const fakeButtonConfiguration: ButtonConfiguration = {
      id: 1,
      label: 'fake button',
      type: 'number',
      value: 'fake number',
    };

    component.buttonConfiguration = fakeButtonConfiguration;
    component.buttonClickEvent();

    expect(service.callNextOnNumberSubject).toHaveBeenCalledWith(
      fakeButtonConfiguration
    );
  });

  it(`${ButtonComponent.prototype.buttonClickEvent.name} SHOULD call next on operation subject WHEN called with type operation`, () => {
    spyOn(service, 'callNextOnOperationSubject');
    component.buttonConfiguration.type = 'operation';

    component.buttonClickEvent();

    expect(service.callNextOnOperationSubject).toHaveBeenCalled();
  });

  it(`${ButtonComponent.prototype.buttonClickEvent.name} SHOULD call next on operation subject WHEN called with button configuration`, () => {
    spyOn(service, 'callNextOnOperationSubject');
    const fakeButtonConfiguration: ButtonConfiguration = {
      id: 1,
      label: 'fake button',
      type: 'operation',
      value: 'fake operation',
    };

    component.buttonConfiguration = fakeButtonConfiguration;
    component.buttonClickEvent();

    expect(service.callNextOnOperationSubject).toHaveBeenCalledWith(
      fakeButtonConfiguration
    );
  });

  it(`${ButtonComponent.prototype.buttonClickEvent.name} SHOULD call next on general subject WHEN called with type general`, () => {
    spyOn(service, 'callNextOnGeneralSubject');
    component.buttonConfiguration.type = 'general';

    component.buttonClickEvent();

    expect(service.callNextOnGeneralSubject).toHaveBeenCalled();
  });

  it(`${ButtonComponent.prototype.buttonClickEvent.name} SHOULD call next on general subject WHEN called with button configuration`, () => {
    spyOn(service, 'callNextOnGeneralSubject');
    const fakeButtonConfiguration: ButtonConfiguration = {
      id: 1,
      label: 'fake button',
      type: 'general',
      value: 'fake general',
    };

    component.buttonConfiguration = fakeButtonConfiguration;
    component.buttonClickEvent();

    expect(service.callNextOnGeneralSubject).toHaveBeenCalledWith(
      fakeButtonConfiguration
    );
  });
});
