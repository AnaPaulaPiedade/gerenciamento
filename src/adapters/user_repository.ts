import {User} from 'domain/model';

export interface UserRepository {
  add: (user: User) => boolean;
  get_by_email: (email: string) => User | null;
}
