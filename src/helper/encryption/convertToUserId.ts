import { UserId } from '../../domain/User';
import { EncryptedUserId } from '../../interfaces/EncryptedUserId';
import { decryptFixedSalt } from './decryptFixedSalt';

export async function convertToUserId(encryptedUserId: EncryptedUserId): Promise<UserId> {

  const userId = await decryptFixedSalt(encryptedUserId);

  return userId as UserId;
}