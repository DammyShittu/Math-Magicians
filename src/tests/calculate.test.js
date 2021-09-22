import calculate from '../logic/calculate';

describe('unit tests for calculate.js', () => {
  test('checking when AC is clicked the result should be 0', () => {
    const obj = {
        total: 0,
        next: null,
        operation: null,
      };
    expect({...calculate(obj, 'AC')}).toStrictEqual({
        total: 0,
        next: null,
        operation: null,});
  });

  test('checking when = is clicked the result should be subtraction', () => {
    const obj = {
        total: 20,
        next: 10,
        operation: '-',
      };
      const buttonName = '='
    expect(calculate(obj, buttonName)).toStrictEqual({
        total: '10',
        next: null,
        operation: null,});
  });

  test('checking when +/- is clicked the result should be positive/negative', () => {
    const obj = {
        total: 0,
        next: 10,
        operation: null,
      };
      const buttonName = '+/-'
    expect(calculate(obj, buttonName)).toStrictEqual({
        total: 0,
        next: '-10',
        operation: null,});
  });
});
