import {new_user} from 'domain/model';
import {v4 as uuidv4} from 'uuid';

type CreateUserReq = {
  email: string;
  password: string;
  name?: string;
};

type CreateUserRes = {
  id: string;
};

type IdFactory = () => string;

export function create_user(
  req: CreateUserReq,
  id_factory: IdFactory = uuidv4
): CreateUserRes {
  const id = id_factory();
  const crypto_password = req.password;
  const user = new_user(id, req.email, crypto_password, req.name);

  return {
    id: user.id,
  };
}
