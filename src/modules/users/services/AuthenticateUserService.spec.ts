import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './createUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const createUser = new CreateUserService(fakeUsersRepository);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Gian Ferreira',
      email: 'gianferreira@gmail.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'gianferreira@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });
});
