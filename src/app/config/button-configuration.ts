import { ButtonConfiguration } from './../core/model/button-configuration.model';

export const numberButtonConfiguration: ButtonConfiguration[] = [
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

export const operationsButtonConfiguration: ButtonConfiguration[] = [
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

export const generalPurposeButtonConfiguration: ButtonConfiguration[] = [
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

export const numberRowSize: number = 3;

export const operationsRowSize: number = 1;
