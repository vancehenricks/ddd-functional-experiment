import { User } from '../../domain/user';
import { EncryptedUserId, EncryptedUser } from '../../interfaces/api';
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