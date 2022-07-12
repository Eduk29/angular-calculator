import { ButtonConfiguration } from './../../core/model/button-configuration.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDisplayComponent } from './buttons-display.component';

describe('ButtonsDisplayComponent', () => {
    let component: ButtonsDisplayComponent;
    let fixture: ComponentFixture<ButtonsDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonsDisplayComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonsDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`numberButtonsMatrixDisplay SHOULD be empty WHEN component is created`, () => {
        expect(component.numberButtonsMatrixDisplay).toEqual([]);
    });

    it(`operationButtonsMatrixDisplay SHOULD be empty WHEN component is created`, () => {
        expect(component.operationButtonsMatrixDisplay).toEqual([]);
    });

    it(`generalPurposeButtonsMatrixDisplay SHOULD be empty WHEN component is created`, () => {
        expect(component.generalPurposeButtonsMatrixDisplay).toEqual([]);
    });

    it(`Button CSS classes SHOULD be mx-1 and w-33  WHEN the button is not the equal button`, () => {
        const fakeButtonConfiguration: ButtonConfiguration = {
            id: 1,
            label: 'fake AC button',
            type: 'general',
            value: 'AC',
            cssIdentifier: '',
        };

        const cssClass = component.defineButtonSize(fakeButtonConfiguration);

        expect(cssClass).toBe('mx-1 w-33');
    });

    it(`Button CSS classes SHOULD be ms-1 and w-66  WHEN the button is the equal button`, () => {
        const fakeButtonConfiguration: ButtonConfiguration = {
            id: 1,
            label: 'fake equal button',
            type: 'general',
            value: '=',
            cssIdentifier: '',
        };

        const cssClass = component.defineButtonSize(fakeButtonConfiguration);

        expect(cssClass).toBe('ms-1 w-66');
    });
});
