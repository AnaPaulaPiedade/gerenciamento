export class ValidationError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'ValidationError';
  }
}
