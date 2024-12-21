import { User } from '../../domain/User';
import { UserRepository } from '../../interfaces/UserRepository';

export async function getUserById(userRepository: UserRepository, id: number): Promise<User | null> {
  return userRepository.getUserById(id);
}