import { EncryptedUserId, EncryptedUser } from '../../interfaces/api';
import { UserRepository } from '../../interfaces/repository';
import { convertToUser } from '../../util/db/convertToUser';
import { convertToUserId } from '../../util/encryption/convertToUserId';
import { convertToEncryptedUser } from '../../util/user/convertToEncryptedUser';


export async function getUserById(userRepository: UserRepository, encryptedUserId: EncryptedUserId): Promise<EncryptedUser | null> {
  const userId = await convertToUserId(encryptedUserId); 

  if (!userId) {
    return null;
  }

  const userRecord = await userRepository.getUserById(userId);

  if (!userRecord) {
    return null;
  }

  return convertToEncryptedUser(convertToUser(userRecord), encryptedUserId);
}