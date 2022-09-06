import {None} from 'common_types';
import {ValidationError} from 'domain/error';

export type User = {
  id: string;
  email: string;
  password: string;
  name: string | None;
};

export function new_user(
  id: string,
  email: string,
  password: string,
  name?: string
): User {
  const user: User = {
    id,
    email,
    password,
    name,
  };

  if (email.length === 0) {
    throw new ValidationError('email cannot be empty');
  }

  if (!email.includes('@')) {
    throw new ValidationError("email must has a '@'");
  }

  return user;
}
