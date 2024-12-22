import { UserId } from '../../domain/User';
import { EncryptedUserId } from '../../interfaces/api/EncryptedUserId';
import { decryptFixed } from './decryptFixed';

export async function convertToUserId(encryptedUserId: EncryptedUserId): Promise<UserId> {

  const userId = await decryptFixed(encryptedUserId);

  return Number(userId) as UserId;
}