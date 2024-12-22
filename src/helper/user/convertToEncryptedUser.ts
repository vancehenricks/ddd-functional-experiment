import { User } from '../../domain/User';
import { EncryptedUser } from '../../interfaces/api/EncryptedUser';
import { EncryptedUserId } from '../../interfaces/api/EncryptedUserId';
import { convertToEncryptedUserId } from '../encryption/convertToEncryptedUserId';

export async function convertToEncryptedUser(user: User, preEncryptedUserId?: EncryptedUserId): Promise<EncryptedUser> {


  const encryptedId = preEncryptedUserId ?? await convertToEncryptedUserId(user.userId);

  const encryptedUserId : EncryptedUser = {
    userId: encryptedId,
    username: user.username,
    displayName: user.displayName,
    description: user.description,
    email: user.email,
  };

  return encryptedUserId;
}