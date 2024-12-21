import { UserRegistration } from '../../domain/UserRegistration';
import { UserRepository } from '../../interfaces/UserRepository';
import { User } from '../../domain/User';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function addUser(userRepository: UserRepository, user: UserRegistration): Promise<User | null> {
  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);

  const userWithHashedPassword: UserRegistration = {
    ...user,
    password: hashedPassword,
  };


  //todo encrypt id when there is something returned here
  return userRepository.addUser(userWithHashedPassword);
}