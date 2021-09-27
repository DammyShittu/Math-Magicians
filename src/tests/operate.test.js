import operate from '../logic/operate';

describe('mathematical operations', () => {
  test('Add two numbers', () => {
    expect(operate(5, 10, '+')).toBe('15');
  });

  test('Subtract two numbers', () => {
    expect(operate(20, 10, '-')).toBe('10');
  });

  test('Multiply two numbers', () => {
    expect(operate(5, 10, 'x')).toBe('50');
  });

  test('Divide two numbers', () => {
    expect(operate(36, 6, '÷')).toBe('6');
  });

  test('Use Modulo', () => {
    expect(operate(36, 6, '%')).toEqual('0');
  });
});
