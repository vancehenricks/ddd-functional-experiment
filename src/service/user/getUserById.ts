import { convertToUser } from '../../helper/db/convertToUser';
import { convertToUserId } from '../../helper/encryption/convertToUserId';
import { convertToEncryptedUser } from '../../helper/user/convertToEncryptedUser';
import { EncryptedUser } from '../../interfaces/api/EncryptedUser';
import { EncryptedUserId } from '../../interfaces/api/EncryptedUserId';
import { UserRepository } from '../../interfaces/db/UserRepository';


export async function getUserById(userRepository: UserRepository, encryptedUserId: EncryptedUserId): Promise<EncryptedUser | null> {
  const userId = await convertToUserId(encryptedUserId); 

  const userRecord = await userRepository.getUserById(userId);

  if (!userRecord) {
    return null;
  }

  return convertToEncryptedUser(convertToUser(userRecord));
}