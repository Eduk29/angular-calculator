import { ButtonConfiguration } from './../core/model/button-configuration.model';

export const numberButtonConfiguration: ButtonConfiguration[] = [
  {
    id: 1,
    label: '1',
    value: 1,
    type: 'number',
    cssIdentifier: '1',
  },
  {
    id: 2,
    label: '2',
    value: 2,
    type: 'number',
    cssIdentifier: '2',
  },
  {
    id: 3,
    label: '3',
    value: 3,
    type: 'number',
    cssIdentifier: '3',
  },
  {
    id: 4,
    label: '4',
    value: 4,
    type: 'number',
    cssIdentifier: '4',
  },
  {
    id: 5,
    label: '5',
    value: 5,
    type: 'number',
    cssIdentifier: '5',
  },
  {
    id: 6,
    label: '6',
    value: 6,
    type: 'number',
    cssIdentifier: '6',
  },
  {
    id: 7,
    label: '7',
    value: 7,
    type: 'number',
    cssIdentifier: '7',
  },
  {
    id: 8,
    label: '8',
    value: 8,
    type: 'number',
    cssIdentifier: '8',
  },
  {
    id: 9,
    label: '9',
    value: 9,
    type: 'number',
    cssIdentifier: '9',
  },
  {
    id: 10,
    label: '0',
    value: 0,
    type: 'number',
    cssIdentifier: '0',
  },
];

export const operationsButtonConfiguration: ButtonConfiguration[] = [
  {
    id: 1,
    label: '+',
    value: 'add',
    type: 'operation',
    cssIdentifier: 'add',
  },
  {
    id: 2,
    label: '-',
    value: 'minus',
    type: 'operation',
    cssIdentifier: 'minus',
  },
  {
    id: 3,
    label: 'x',
    value: 'mul',
    type: 'operation',
    cssIdentifier: 'multiplication',
  },
  {
    id: 4,
    label: '/',
    value: 'div',
    type: 'operation',
    cssIdentifier: 'division',
  },
];

export const generalPurposeButtonConfiguration: ButtonConfiguration[] = [
  {
    id: 1,
    label: 'AC',
    value: 'AC',
    type: 'general',
    cssIdentifier: 'reset',
  },
  {
    id: 2,
    label: '.',
    value: '.',
    type: 'general',
    cssIdentifier: 'decimal',
  },
  {
    id: 3,
    label: '=',
    value: '=',
    type: 'general',
    cssIdentifier: 'equal',
  },
];

export const numberRowSize: number = 3;

export const operationsRowSize: number = 1;
