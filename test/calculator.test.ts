import {division, sum} from 'calculator';

describe('sum', () => {
  it('should sum integers', () => {
    const result = sum(1, 2);

    expect(result).toEqual(3);
  });

  it('should sum 0 integers', () => {
    const result = sum(0, 0);

    expect(result).toEqual(0);
  });
});

describe('division', () => {
  it('should divide integers', () => {
    const result = division(2, 1);

    expect(result).toEqual(2);
  });

  it('should throw if divisor is zero', () => {
    expect(() => division(1, 0)).toThrow();
  });
});
