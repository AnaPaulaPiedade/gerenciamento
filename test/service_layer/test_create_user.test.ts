import {create_user} from '../../src/service_layer/services';
import {FakeUserRepo} from '../fakes';

describe('create user', () => {
  it('should return user id', () => {
    const result = create_user(
      {
        email: 'test@gmail.com',
        password: '1234',
        name: 'user',
      },
      new FakeUserRepo(),
      () => '1'
    );

    expect(result).toEqual({
      tag: 'success',
      id: '1',
    });
  });

  it('should return error if email already exists', () => {
    const user = {
      email: 'test@gmail.com',
      password: '1234',
      name: 'user',
    };
    const repo = new FakeUserRepo();
    create_user(user, repo);

    const result = create_user(user, repo);

    expect(result.tag).toEqual('error');
  });

  it('should use a default id factory even if none is provided', () => {
    const result = create_user(
      {
        email: 'test@gmail.com',
        password: '1234',
        name: 'user',
      },
      new FakeUserRepo()
    );

    if (result.tag === 'success') {
      expect(result.id).toBeDefined();
    } else {
      fail('it should be success');
    }
  });
});
