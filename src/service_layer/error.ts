export class RepositoryError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'RepositoryError';
  }
}

export class EmailAlreadyExists extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'EmailAlreadyExists';
  }
}
