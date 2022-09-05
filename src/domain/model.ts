import {None} from 'common_types';

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

  return user;
}
