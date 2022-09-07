import {UserRepository} from 'adapters/user_repository';
import {ValidationError} from 'domain/error';
import {new_user} from 'domain/model';
import {v4 as uuidv4} from 'uuid';
import {EmailAlreadyExists, RepositoryError} from './error';

type CreateUserReq = {
  email: string;
  password: string;
  name?: string;
};

type CreateUserRes = CreateUserSuccess | CreateUserFail;

interface CreateUserSuccess {
  tag: 'success';
  id: string;
}

type CreateUserFail = {
  tag: 'error';
  error: Error;
};

type IdFactory = () => string;

export function create_user(
  req: CreateUserReq,
  repo: UserRepository,
  id_factory: IdFactory = uuidv4
): CreateUserRes {
  const id = id_factory();
  const crypto_password = req.password;

  try {
    const user = new_user(id, req.email, crypto_password, req.name);
    const existent_user = repo.get_by_email(req.email);
    if (existent_user) {
      return {
        tag: 'error',
        error: new EmailAlreadyExists(`email: ${req.email}`),
      };
    }

    const has_persisted = repo.add(user);

    if (!has_persisted) {
      return {
        tag: 'error',
        error: new RepositoryError('could not save user on storage'),
      };
    }

    return {
      tag: 'success',
      id: user.id,
    };
  } catch (err) {
    if (err instanceof ValidationError) {
      return {
        tag: 'error',
        error: err,
      };
    }

    throw err;
  }
}
