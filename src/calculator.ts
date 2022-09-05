export function sum(augend: number, addend: number): number {
  return augend + addend;
}

export function division(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error('Cannot divide by 0');
  }

  return dividend / divisor;
}
