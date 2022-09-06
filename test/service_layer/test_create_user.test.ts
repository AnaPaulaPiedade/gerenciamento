import {create_user} from '../../src/service_layer/services';

describe('create user', () => {
  it('should return user id', () => {
    const result = create_user(
      {
        email: 'test@gmail.com',
        password: '1234',
        name: 'user',
      },
      () => '1'
    );

    expect(result).toEqual({
      id: '1',
    });
  });

  it('should use a default id factory even if none is provided', () => {
    const result = create_user({
      email: 'test@gmail.com',
      password: '1234',
      name: 'user',
    });

    expect(result.id).toBeDefined();
  });
});
