import { UserId } from '../../domain/User';
import { EncryptedUserId } from '../../interfaces/EncryptedUserId';
import { encryptFixedSalt } from './encryptFixedSalt';

export async function convertToEncryptedUserId(userId: UserId): Promise<EncryptedUserId> {

  const encryptedUserId = await encryptFixedSalt(userId);
  return encryptedUserId as EncryptedUserId;
}