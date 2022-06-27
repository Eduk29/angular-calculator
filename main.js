(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/angular-calculator/angular-calculator/src/main.ts */"zUnb");


/***/ }),

/***/ "0cjM":
/*!***********************************************************************!*\
  !*** ./src/app/ui-components/screen-display/screen-display.module.ts ***!
  \***********************************************************************/
/*! exports provided: ScreenDisplayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenDisplayModule", function() { return ScreenDisplayModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _screen_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen-display.component */ "jmD0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ScreenDisplayModule {
}
ScreenDisplayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ScreenDisplayModule });
ScreenDisplayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ScreenDisplayModule_Factory(t) { return new (t || ScreenDisplayModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ScreenDisplayModule, { declarations: [_screen_display_component__WEBPACK_IMPORTED_MODULE_2__["ScreenDisplayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]], exports: [_screen_display_component__WEBPACK_IMPORTED_MODULE_2__["ScreenDisplayComponent"]] }); })();


/***/ }),

/***/ "2tG/":
/*!***********************************************!*\
  !*** ./src/app/core/services/core.service.ts ***!
  \***********************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CoreService {
    constructor() {
        this.numberClickEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.operationClickEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.generalClickEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    callNextOnNumberSubject(button) {
        this.numberClickEvent$.next(button);
    }
    callNextOnOperationSubject(button) {
        this.operationClickEvent$.next(button);
    }
    callNextOnGeneralSubject(button) {
        this.generalClickEvent$.next(button);
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
CoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4hGC":
/*!************************************************!*\
  !*** ./src/app/config/button-configuration.ts ***!
  \************************************************/
/*! exports provided: numberButtonConfiguration, operationsButtonConfiguration, generalPurposeButtonConfiguration, numberRowSize, operationsRowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberButtonConfiguration", function() { return numberButtonConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationsButtonConfiguration", function() { return operationsButtonConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalPurposeButtonConfiguration", function() { return generalPurposeButtonConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberRowSize", function() { return numberRowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationsRowSize", function() { return operationsRowSize; });
const numberButtonConfiguration = [
    {
        id: 1,
        label: '1',
        value: 1,
        type: 'number'
    },
    {
        id: 2,
        label: '2',
        value: 2,
        type: 'number'
    },
    {
        id: 3,
        label: '3',
        value: 3,
        type: 'number'
    },
    {
        id: 4,
        label: '4',
        value: 4,
        type: 'number'
    },
    {
        id: 5,
        label: '5',
        value: 5,
        type: 'number'
    },
    {
        id: 6,
        label: '6',
        value: 6,
        type: 'number'
    },
    {
        id: 7,
        label: '7',
        value: 7,
        type: 'number'
    },
    {
        id: 8,
        label: '8',
        value: 8,
        type: 'number'
    },
    {
        id: 9,
        label: '9',
        value: 9,
        type: 'number'
    },
    {
        id: 10,
        label: '0',
        value: 0,
        type: 'number'
    }
];
const operationsButtonConfiguration = [
    {
        id: 1,
        label: '+',
        value: 'add',
        type: 'operation'
    },
    {
        id: 2,
        label: '-',
        value: 'minus',
        type: 'operation'
    },
    {
        id: 3,
        label: 'x',
        value: 'mul',
        type: 'operation'
    },
    {
        id: 4,
        label: '/',
        value: 'div',
        type: 'operation'
    }
];
const generalPurposeButtonConfiguration = [
    {
        id: 1,
        label: 'AC',
        value: 'AC',
        type: 'general'
    },
    {
        id: 2,
        label: '.',
        value: '.',
        type: 'general'
    },
    {
        id: 3,
        label: '=',
        value: '=',
        type: 'general'
    }
];
const numberRowSize = 3;
const operationsRowSize = 1;


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CN6b":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/header/header.module.ts ***!
  \*******************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "p4B9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]] }); })();


/***/ }),

/***/ "RXl3":
/*!****************************************!*\
  !*** ./src/app/core/core.component.ts ***!
  \****************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _config_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/button-configuration */ "4hGC");
/* harmony import */ var _utils_operations_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/operations.utils */ "jkaQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/core.service */ "2tG/");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _ui_components_screen_display_screen_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui-components/screen-display/screen-display.component */ "jmD0");
/* harmony import */ var _ui_components_buttons_display_buttons_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui-components/buttons-display/buttons-display.component */ "aQJd");








class CoreComponent {
    constructor(coreService) {
        this.coreService = coreService;
        this.clickEvent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.displayData = '0';
        this.generalPurposeMatrixDisplay = [];
        this.numberButtonsMatrixDisplay = [];
        this.operationButtonsMatrixDisplay = [];
        this.firstNumber = 0;
        this.operation = '';
        this.secondNumber = 0;
    }
    ngOnInit() {
        this.registerClickSubscriptions();
        this.numberButtonsMatrixDisplay = this.createButtonsMatrix(_config_button_configuration__WEBPACK_IMPORTED_MODULE_1__["numberRowSize"], _config_button_configuration__WEBPACK_IMPORTED_MODULE_1__["numberButtonConfiguration"]);
        this.operationButtonsMatrixDisplay = this.createButtonsMatrix(_config_button_configuration__WEBPACK_IMPORTED_MODULE_1__["operationsRowSize"], _config_button_configuration__WEBPACK_IMPORTED_MODULE_1__["operationsButtonConfiguration"]);
        this.generalPurposeMatrixDisplay = _config_button_configuration__WEBPACK_IMPORTED_MODULE_1__["generalPurposeButtonConfiguration"];
    }
    calculate() {
        return Object(_utils_operations_utils__WEBPACK_IMPORTED_MODULE_2__["operationsUtils"])(this.operation, this.firstNumber, this.secondNumber);
    }
    createButtonsMatrix(rowSize, buttonConfiguration) {
        const buttonMatrix = [];
        const numberRows = buttonConfiguration.length / rowSize;
        let initial = 0;
        for (let i = 0; i < numberRows; i++) {
            buttonMatrix.push(this.createMatrixRow(initial, rowSize, buttonConfiguration));
            initial += rowSize;
        }
        return buttonMatrix;
    }
    createMatrixRow(initial, rowSize, array) {
        return this.getRowFromArray(array, initial, rowSize);
    }
    generalButtonClickEvent(button) {
        if (button.value === '=' && this.secondNumber === 0) {
            this.secondNumber = +this.displayData;
            this.displayData = this.calculate();
        }
        if (button.value === 'AC') {
            // TODO: CHANGE STRING TO ENUM
            this.resetCalculator('hard');
        }
        if (button.value === '.') {
            this.numberButtonClickEvent(button);
        }
    }
    getRowFromArray(buttonConfigurations, initial, rowSize) {
        let buttonRow = [];
        buttonConfigurations.map(() => {
            buttonRow = buttonConfigurations.slice(initial, initial + rowSize);
        });
        return buttonRow;
    }
    hardReset() {
        this.displayData = '0';
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.operation = '';
    }
    isNewCalculus() {
        return this.firstNumber !== 0 && this.secondNumber !== 0 && +this.displayData !== 0;
    }
    numberButtonClickEvent(button) {
        if (this.displayData === '0') {
            this.displayData = button.label;
        }
        else {
            this.displayData = this.displayData.concat(button.label);
        }
        this.verifyNewCalculusFlow(button);
    }
    operationButtonClickEvent(button) {
        this.firstNumber = +this.displayData;
        this.operation = button.value;
        // TODO: CHANGE STRING TO ENUM
        this.resetCalculator('soft');
    }
    registerClickSubscriptions() {
        this.coreService.numberClickEvent$.subscribe(button => {
            this.numberButtonClickEvent(button);
        });
        this.coreService.operationClickEvent$.subscribe(button => {
            this.operationButtonClickEvent(button);
        });
        this.coreService.generalClickEvent$.subscribe(button => {
            this.generalButtonClickEvent(button);
        });
    }
    resetCalculator(mode) {
        // TODO: CHANGE STRING TO ENUM
        mode === 'soft' ? this.softReset() : this.hardReset();
    }
    softReset() {
        this.displayData = '0';
    }
    verifyNewCalculusFlow(button) {
        if (this.isNewCalculus()) {
            this.resetCalculator('hard'); // TODO: CHANGE STRING TO ENUM
            this.numberButtonClickEvent(button);
        }
    }
}
CoreComponent.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"])); };
CoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CoreComponent, selectors: [["app-core"]], decls: 5, vars: 4, consts: [[1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "calculator"], [1, "w-100", 3, "displayData"], [3, "numberButtonsMatrixDisplay", "operationButtonsMatrixDisplay", "generalPurposeButtonsMatrixDisplay"]], template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-screen-display", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-buttons-display", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayData", ctx.displayData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("numberButtonsMatrixDisplay", ctx.numberButtonsMatrixDisplay)("operationButtonsMatrixDisplay", ctx.operationButtonsMatrixDisplay)("generalPurposeButtonsMatrixDisplay", ctx.generalPurposeMatrixDisplay);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _ui_components_screen_display_screen_display_component__WEBPACK_IMPORTED_MODULE_6__["ScreenDisplayComponent"], _ui_components_buttons_display_buttons_display_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsDisplayComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n}\n\n@media screen and (min-width: 1024px) {\n  .calculator[_ngcontent-%COMP%] {\n    background-color: #eceff1;\n    min-height: 15%;\n    height: 25%;\n    max-height: 50%;\n    min-width: 15%;\n    width: 25%;\n    max-width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImNvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5jYWxjdWxhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xuICAgIG1pbi1oZWlnaHQ6IDE1JTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgbWluLXdpZHRoOiAxNSU7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-components/header/header.component */ "p4B9");
/* harmony import */ var _core_core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.component */ "RXl3");



class AppComponent {
    constructor() {
        this.title = 'angular-calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-core");
    } }, directives: [_ui_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _core_core_component__WEBPACK_IMPORTED_MODULE_2__["CoreComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UjKN":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/button/button.component.ts ***!
  \**********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/core.service */ "2tG/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class ButtonComponent {
    constructor(coreService) {
        this.coreService = coreService;
        this.buttonConfiguration = {};
        this.color = 'primary';
        this.clickEventHandler = {
            number: () => this.coreService.callNextOnNumberSubject(this.buttonConfiguration),
            operation: () => this.coreService.callNextOnOperationSubject(this.buttonConfiguration),
            general: () => this.coreService.callNextOnGeneralSubject(this.buttonConfiguration)
        };
    }
    ngOnInit() { }
    buttonClickEvent() {
        this.clickEventHandler[this.buttonConfiguration.type]();
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"])); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { buttonConfiguration: "buttonConfiguration", color: "color" }, decls: 2, vars: 2, consts: [["mat-raised-button", "", 1, "w-100", 3, "color", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.buttonClickEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonConfiguration.label, "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _ui_components_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-components/header/header.module */ "CN6b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _ui_components_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _ui_components_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"]] }); })();


/***/ }),

/***/ "aQJd":
/*!****************************************************************************!*\
  !*** ./src/app/ui-components/buttons-display/buttons-display.component.ts ***!
  \****************************************************************************/
/*! exports provided: ButtonsDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsDisplayComponent", function() { return ButtonsDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "UjKN");



function ButtonsDisplayComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonConfiguration", button_r5);
} }
function ButtonsDisplayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonsDisplayComponent_div_2_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r3);
} }
function ButtonsDisplayComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonConfiguration", button_r8);
} }
function ButtonsDisplayComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonsDisplayComponent_div_4_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r6);
} }
function ButtonsDisplayComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.defineButtonSize(button_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonConfiguration", button_r9);
} }
class ButtonsDisplayComponent {
    constructor() {
        this.numberButtonsMatrixDisplay = [];
        this.operationButtonsMatrixDisplay = [];
        this.generalPurposeButtonsMatrixDisplay = [];
    }
    ngOnInit() { }
    defineButtonSize(button) {
        return button.value !== '=' ? 'mx-1 w-33' : 'ms-1 w-66';
    }
}
ButtonsDisplayComponent.ɵfac = function ButtonsDisplayComponent_Factory(t) { return new (t || ButtonsDisplayComponent)(); };
ButtonsDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonsDisplayComponent, selectors: [["app-buttons-display"]], inputs: { numberButtonsMatrixDisplay: "numberButtonsMatrixDisplay", operationButtonsMatrixDisplay: "operationButtonsMatrixDisplay", generalPurposeButtonsMatrixDisplay: "generalPurposeButtonsMatrixDisplay" }, decls: 7, vars: 3, consts: [[1, "d-flex", "flex-row", "mt-2", "mb-1"], [1, "d-flex", "flex-column", "w-75"], ["class", "d-flex flex-row justify-content-between my-1 w-100", 4, "ngFor", "ngForOf"], ["id", "operation-buttons", 1, "d-flex", "flex-column", "w-25"], ["class", "d-flex flex-column justify-content-between my-1", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "w-100"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "justify-content-between", "my-1", "w-100"], ["class", "mx-1 w-100", 4, "ngFor", "ngForOf"], [1, "mx-1", "w-100"], [3, "buttonConfiguration"], [1, "d-flex", "flex-column", "justify-content-between", "my-1"], ["class", "w-100", 4, "ngFor", "ngForOf"], [1, "w-100"], [3, "ngClass"]], template: function ButtonsDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonsDisplayComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ButtonsDisplayComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ButtonsDisplayComponent_div_6_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numberButtonsMatrixDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.operationButtonsMatrixDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.generalPurposeButtonsMatrixDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".w-66[_ngcontent-%COMP%] {\n  width: 66%;\n}\n\n.w-33[_ngcontent-%COMP%] {\n  width: 33%;\n}\n\n#general-purpose-buttons[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n\n#general-purpose-buttons[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  margin-left: 0.25rem;\n}\n\n@media screen and (max-width: 1024px) {\n  #operation-buttons[_ngcontent-%COMP%] {\n    padding-left: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1dHRvbnMtZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFHRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHRTtFQUNFLG9CQUFBO0FBREo7O0FBS0E7RUFDRTtJQUNFLGlCQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJidXR0b25zLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudy02NiB7XG4gIHdpZHRoOiA2NiU7XG59XG5cbi53LTMzIHtcbiAgd2lkdGg6IDMzJTtcbn1cblxuI2dlbmVyYWwtcHVycG9zZS1idXR0b25zIHtcbiAgPiA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICB9XG5cbiAgPiA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICNvcGVyYXRpb24tYnV0dG9ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "jkaQ":
/*!************************************************!*\
  !*** ./src/app/core/utils/operations.utils.ts ***!
  \************************************************/
/*! exports provided: operationsUtils, addOperation, minusOperation, multiplicationOperation, divisionOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationsUtils", function() { return operationsUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOperation", function() { return addOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minusOperation", function() { return minusOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplicationOperation", function() { return multiplicationOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divisionOperation", function() { return divisionOperation; });
const operationsUtils = (type, firstNumber, secondNumber) => {
    var operations = {
        add: () => addOperation(firstNumber, secondNumber),
        minus: () => minusOperation(firstNumber, secondNumber),
        mul: () => multiplicationOperation(firstNumber, secondNumber),
        div: () => divisionOperation(firstNumber, secondNumber)
    };
    return operations[type]();
};
const addOperation = (firstNumber, secondNumber) => {
    return (firstNumber + secondNumber).toString();
};
const minusOperation = (firstNumber, secondNumber) => {
    return (firstNumber - secondNumber).toString();
};
const multiplicationOperation = (firstNumber, secondNumber) => {
    return (firstNumber * secondNumber).toString();
};
const divisionOperation = (firstNumber, secondNumber) => {
    return (firstNumber / secondNumber).toString();
};


/***/ }),

/***/ "jmD0":
/*!**************************************************************************!*\
  !*** ./src/app/ui-components/screen-display/screen-display.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScreenDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenDisplayComponent", function() { return ScreenDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


class ScreenDisplayComponent {
    constructor() {
        this.displayData = 0;
    }
    ngOnInit() {
    }
}
ScreenDisplayComponent.ɵfac = function ScreenDisplayComponent_Factory(t) { return new (t || ScreenDisplayComponent)(); };
ScreenDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScreenDisplayComponent, selectors: [["app-screen-display"]], inputs: { displayData: "displayData" }, decls: 3, vars: 1, consts: [[1, "d-flex", "flex-row", "justify-content-end", "display-4"]], template: function ScreenDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayData, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JlZW4tZGlzcGxheS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "k7gs":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/button/button.module.ts ***!
  \*******************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _core_services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/core.service */ "2tG/");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.component */ "UjKN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ButtonModule {
}
ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ButtonModule });
ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, providers: [
        _core_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ButtonModule, { declarations: [_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]], exports: [_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]] }); })();


/***/ }),

/***/ "ncwL":
/*!*************************************************************************!*\
  !*** ./src/app/ui-components/buttons-display/buttons-display.module.ts ***!
  \*************************************************************************/
/*! exports provided: ButtonsDisplayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsDisplayModule", function() { return ButtonsDisplayModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../button/button.module */ "k7gs");
/* harmony import */ var _buttons_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons-display.component */ "aQJd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ButtonsDisplayModule {
}
ButtonsDisplayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ButtonsDisplayModule });
ButtonsDisplayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ButtonsDisplayModule_Factory(t) { return new (t || ButtonsDisplayModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ButtonsDisplayModule, { declarations: [_buttons_display_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsDisplayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"]], exports: [_buttons_display_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsDisplayComponent"]] }); })();


/***/ }),

/***/ "p4B9":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [["color", "primary"], [1, "mx-3"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _ui_components_screen_display_screen_display_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-components/screen-display/screen-display.module */ "0cjM");
/* harmony import */ var _ui_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ui-components/button/button.module */ "k7gs");
/* harmony import */ var _ui_components_buttons_display_buttons_display_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../ui-components/buttons-display/buttons-display.module */ "ncwL");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.component */ "RXl3");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/core.service */ "2tG/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"]
    ], imports: [[
            _ui_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _ui_components_buttons_display_buttons_display_module__WEBPACK_IMPORTED_MODULE_4__["ButtonsDisplayModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ui_components_screen_display_screen_display_module__WEBPACK_IMPORTED_MODULE_2__["ScreenDisplayModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_core_component__WEBPACK_IMPORTED_MODULE_5__["CoreComponent"]], imports: [_ui_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        _ui_components_buttons_display_buttons_display_module__WEBPACK_IMPORTED_MODULE_4__["ButtonsDisplayModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ui_components_screen_display_screen_display_module__WEBPACK_IMPORTED_MODULE_2__["ScreenDisplayModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]], exports: [_core_component__WEBPACK_IMPORTED_MODULE_5__["CoreComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map