import {UserRepository} from '../src/adapters/user_repository';
import {User} from '../src/domain/model';

export class FakeUserRepo implements UserRepository {
  private users: Record<string, User> = {};

  add(user: User): boolean {
    this.users[user.email] = user;
    return true;
  }

  get_by_email(email: string): User | null {
    return this.users[email] || null;
  }
}
