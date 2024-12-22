import { User } from '../../domain/User';
import { EncryptedUser } from '../../interfaces/api/EncryptedUser';
import { convertToEncryptedUserId } from '../encryption/convertToEncryptedUserId';

export async function convertToEncryptedUser(user: User): Promise<EncryptedUser> {


  const encryptedId = await convertToEncryptedUserId(user.userId);

  const encryptedUserId : EncryptedUser = {
    userId: encryptedId,
    username: user.username,
    displayName: user.displayName,
    description: user.description,
    email: user.email,
  };

  return encryptedUserId;
}