import {new_user} from '../../src/domain/model';

describe('new user', () => {
  it('should return user', () => {
    const result = new_user('1', 'test@test.com', '123', 'test_user');

    expect(result).toEqual({
      id: '1',
      email: 'test@test.com',
      password: '123',
      name: 'test_user',
    });
  });

  it('should return user even if name not provided', () => {
    const result = new_user('1', 'test@test.com', '123');

    expect(result).toEqual({
      id: '1',
      email: 'test@test.com',
      password: '123',
    });
  });
});
