import { User } from '../../domain/User';
import { convertToUserId } from '../../helper/encryption/convertToUserId';
import { EncryptedUserId } from '../../interfaces/EncryptedUserId';
import { UserRepository } from '../../interfaces/UserRepository';


export async function getUserById(userRepository: UserRepository, encryptedUserId: EncryptedUserId): Promise<User | null> {
  const id = await convertToUserId(encryptedUserId); 
  return userRepository.getUserById(id);
}