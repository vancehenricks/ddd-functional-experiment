import { User } from '../../domain/User';
import { EncryptedId } from '../../interfaces/EncryptedId';
import { UserRepository } from '../../interfaces/UserRepository';


export async function getUserById(userRepository: UserRepository, encryptedId: EncryptedId): Promise<User | null> {
  const id = parseInt(encryptedId, 10);  
  return userRepository.getUserById(id);
}