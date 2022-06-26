export const operationsUtils = (type: string, firstNumber: number, secondNumber: number) => {
  var operations: any = {
    add: () => addOperation(firstNumber, secondNumber),
    minus: () => minusOperation(firstNumber, secondNumber),
    mul: () => multiplicationOperation(firstNumber, secondNumber),
    div: () => divisionOperation(firstNumber, secondNumber)
  };

  return operations[type]();
};

export const addOperation = (firstNumber: number, secondNumber: number) => {
  return (firstNumber + secondNumber).toString();
};

export const minusOperation = (firstNumber: number, secondNumber: number) => {
  return (firstNumber - secondNumber).toString();
};

export const multiplicationOperation = (firstNumber: number, secondNumber: number) => {
  return (firstNumber * secondNumber).toString();
};

export const divisionOperation = (firstNumber: number, secondNumber: number) => {
  return (firstNumber / secondNumber).toString();
};
