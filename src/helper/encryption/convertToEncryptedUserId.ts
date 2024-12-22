import { UserId } from '../../domain/User';
import { EncryptedUserId } from '../../interfaces/api/EncryptedUserId';
import { encryptFixed } from './encryptFixed';

export async function convertToEncryptedUserId(userId: UserId): Promise<EncryptedUserId> {

  const encryptedUserId = await encryptFixed(userId.toString());
  return encryptedUserId as EncryptedUserId;
}