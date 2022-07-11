import {
  addOperation,
  minusOperation,
  multiplicationOperation,
  divisionOperation,
  operationsUtils,
} from './operations.utils';
import { TestBed } from '@angular/core/testing';

describe('Operation Utils', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  beforeEach(() => {});

  it('Add operation SHOULD return 4 WHEN first number is 2 and second number is 2', () => {
    const firstNumber = 2;
    const secondNumber = 2;
    const result = addOperation(firstNumber, secondNumber);

    expect(+result).toBe(4);
  });

  it('Minus operation SHOULD return 1 WHEN first number is 3 and second number is 2', () => {
    const firstNumber = 3;
    const secondNumber = 2;
    const result = minusOperation(firstNumber, secondNumber);

    expect(+result).toBe(1);
  });

  it('Multiplication operation SHOULD return 10 WHEN first number is 5 and second number is 2', () => {
    const firstNumber = 5;
    const secondNumber = 2;
    const result = multiplicationOperation(firstNumber, secondNumber);

    expect(+result).toBe(10);
  });

  it('Division operation SHOULD return 4 WHEN first number is 8 and second number is 2', () => {
    const firstNumber = 8;
    const secondNumber = 2;
    const result = divisionOperation(firstNumber, secondNumber);

    expect(+result).toBe(4);
  });

  it('Operation utils SHOULD return 4 WHEN type is add, first number is 2 and second number is 2', () => {
    const firstNumber = 2;
    const secondNumber = 2;
    const type = 'add';
    const result = operationsUtils(type, firstNumber, secondNumber);

    expect(+result).toBe(4);
  });

  it('Operation utils SHOULD return 3 WHEN type is minus, first number is 5 and second number is 2', () => {
    const firstNumber = 5;
    const secondNumber = 2;
    const type = 'minus';
    const result = operationsUtils(type, firstNumber, secondNumber);

    expect(+result).toBe(3);
  });

  it('Operation utils SHOULD return 4 WHEN type is mul, first number is 2 and second number is 2', () => {
    const firstNumber = 2;
    const secondNumber = 2;
    const type = 'mul';
    const result = operationsUtils(type, firstNumber, secondNumber);

    expect(+result).toBe(4);
  });

  it('Operation utils SHOULD return 3 WHEN type is div, first number is 9 and second number is 3', () => {
    const firstNumber = 9;
    const secondNumber = 3;
    const type = 'div';
    const result = operationsUtils(type, firstNumber, secondNumber);

    expect(+result).toBe(3);
  });
});
