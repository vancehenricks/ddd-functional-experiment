import { User } from '../../domain/User';
import { UserRepository } from '../../interfaces/UserRepository';

export async function getUsers(userRepository: UserRepository) : Promise<Array<User>> {
  return userRepository.getUsers();
}